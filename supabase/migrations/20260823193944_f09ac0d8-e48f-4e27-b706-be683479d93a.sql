-- Roles
create type public.app_role as enum ('admin', 'moderator', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "Users can read their own roles" on public.user_roles for select to authenticated using (auth.uid() = user_id);

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

-- Events
create table public.events (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null default '',
  cover_image text,
  event_type text not null default 'Event',
  location_type text not null default 'online' check (location_type in ('online','in_person','hybrid')),
  location text,
  meeting_url text,
  start_date timestamptz not null,
  end_date timestamptz,
  max_capacity integer,
  is_free boolean not null default true,
  registration_open boolean not null default true,
  require_approval boolean not null default false,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.events to anon, authenticated;
grant insert, update, delete on public.events to authenticated;
grant all on public.events to service_role;
alter table public.events enable row level security;
create policy "Published events are publicly readable" on public.events for select to anon, authenticated using (published = true);
create policy "Admins can read all events" on public.events for select to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "Admins can insert events" on public.events for insert to authenticated with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins can update events" on public.events for update to authenticated using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins can delete events" on public.events for delete to authenticated using (public.has_role(auth.uid(), 'admin'));

-- Registrations
create table public.event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  full_name text not null,
  email text not null,
  organisation text,
  status text not null default 'approved' check (status in ('pending','approved','declined','waitlist','cancelled')),
  access_token uuid not null default gen_random_uuid(),
  checked_in boolean not null default false,
  checked_in_at timestamptz,
  created_at timestamptz not null default now(),
  unique (event_id, email)
);
grant insert on public.event_registrations to anon;
grant select, insert, update, delete on public.event_registrations to authenticated;
grant all on public.event_registrations to service_role;
alter table public.event_registrations enable row level security;
create policy "Anyone can register" on public.event_registrations for insert to anon, authenticated with check (true);
create policy "Admins can manage registrations" on public.event_registrations for all to authenticated using (public.has_role(auth.uid(), 'admin')) with check (public.has_role(auth.uid(), 'admin'));

-- Status assignment on register: waitlist if full, pending if approval required
create or replace function public.set_registration_status()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  ev record;
  taken integer;
begin
  select * into ev from public.events where id = new.event_id;
  if ev is null then
    raise exception 'Event not found';
  end if;
  if not ev.published or not ev.registration_open then
    raise exception 'Registration is closed for this event';
  end if;
  select count(*) into taken from public.event_registrations
    where event_id = new.event_id and status in ('approved','pending');
  if ev.max_capacity is not null and taken >= ev.max_capacity then
    new.status := 'waitlist';
  elsif ev.require_approval then
    new.status := 'pending';
  else
    new.status := 'approved';
  end if;
  return new;
end;
$$;

create trigger trg_set_registration_status
  before insert on public.event_registrations
  for each row execute function public.set_registration_status();

-- Public availability (spots left) without exposing registrations
create or replace function public.event_availability(_event_id uuid)
returns table (max_capacity integer, taken bigint)
language sql
stable
security definer
set search_path = public
as $$
  select e.max_capacity,
    (select count(*) from public.event_registrations r
      where r.event_id = e.id and r.status in ('approved','pending'))
  from public.events e
  where e.id = _event_id;
$$;
grant execute on function public.event_availability(uuid) to anon, authenticated;

-- Token-based attendee access page lookup
create or replace function public.get_registration_by_token(_slug text, _token uuid)
returns table (
  full_name text,
  status text,
  event_title text,
  event_start timestamptz,
  event_location text,
  event_location_type text,
  meeting_url text,
  checked_in boolean
)
language sql
stable
security definer
set search_path = public
as $$
  select r.full_name, r.status, e.title, e.start_date, e.location, e.location_type,
    case when r.status = 'approved' then e.meeting_url else null end,
    r.checked_in
  from public.event_registrations r
  join public.events e on e.id = r.event_id
  where e.slug = _slug and r.access_token = _token;
$$;
grant execute on function public.get_registration_by_token(text, uuid) to anon, authenticated;

-- Seed events
insert into public.events (slug, title, description, cover_image, event_type, location_type, location, start_date, end_date, max_capacity, is_free, registration_open, require_approval, published) values
('cybersecurity-workshop-2026', 'Cybersecurity Workshop: Threat Intelligence for Financial Services', 'A hands-on workshop on identifying and mitigating cyber threats targeting African financial institutions. Participants will learn practical techniques for threat detection, incident response, and security framework implementation. The workshop combines lectures with hands-on exercises using real-world scenarios.

By the end of this workshop, participants will be able to identify common attack vectors targeting financial services, implement basic threat detection measures, develop incident response plans, and understand compliance requirements for financial data protection.', '/images/security-ops.jpg', 'Workshop', 'online', 'Online', '2026-09-15T09:00:00+03', '2026-09-16T17:00:00+03', 50, true, true, false, true),
('qkabrine-launch', 'Qkabrine Platform Launch & Demo', 'Join us for the public launch of the Qkabrine Quantum ML platform. This event will feature live demonstrations of the platform capabilities, including automated quantum circuit search, AutoML pipelines, and fairness auditing tools.

The event will include a presentation on the research behind Qkabrine, a live demo of key features, and a Q&A session with the development team. Whether you are a researcher, developer, or simply curious about quantum ML, this event is for you.', '/images/qkabrine.jpg', 'Webinar', 'online', 'Online', '2026-10-10T14:00:00+03', null, 200, true, true, false, true),
('data-governance-summit', 'African Data Governance Summit 2026', 'A three-day gathering of policymakers, researchers, and practitioners working on data governance frameworks for the African context. The summit will feature keynote presentations, panel discussions, and working groups focused on developing practical governance solutions.

Topics include cross-border data sharing, compliance with national and regional regulations, privacy-preserving technologies, and capacity building for data governance institutions.', '/images/team-working.jpg', 'Conference', 'in_person', 'Accra, Ghana', '2026-11-20T08:00:00+00', '2026-11-22T18:00:00+00', 150, false, false, true, true),
('privacy-engineering-bootcamp', 'Privacy Engineering Bootcamp', 'An intensive 3-day training programme on privacy engineering fundamentals. Designed for software developers and data engineers who want to build privacy-preserving systems.

The bootcamp covers differential privacy, synthetic data generation, secure multi-party computation, and practical implementation techniques. Participants will work on hands-on projects throughout the programme.', '/images/about-lab.jpg', 'Training', 'hybrid', 'Nairobi, Kenya / Online', '2026-09-28T09:00:00+03', '2026-09-30T17:00:00+03', 30, false, true, true, true);
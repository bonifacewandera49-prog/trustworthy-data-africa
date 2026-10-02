import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, FileText, MapPin, Monitor, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import { activityAreas } from "@/data/activities";
import { supabase } from "@/integrations/supabase/client";
import type { EventRow } from "@/lib/events";

const highlights = [
  { label: "Explore our research", detail: "Evidence built for African contexts", to: "/research", icon: FileText },
  { label: "Attend an event", detail: "Workshops, talks and field sessions", to: "/events", icon: CalendarDays },
  { label: "Work with the lab", detail: "Research, training and advisory", to: "/partnerships", icon: ShieldCheck },
];

function Hero() {
  return (
    <>
      <section className="home-hero relative min-h-[560px] md:min-h-[650px] flex items-center overflow-hidden">
        <img src="/images/hero-bg.jpg" alt="Solid Elf security researcher at work" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--hero-overlay)/0.96)_0%,hsl(var(--hero-overlay)/0.8)_43%,hsl(var(--hero-overlay)/0.16)_78%)]" />
        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-24 md:px-8">
          <p className="eyebrow mb-5 text-primary">Security &amp; Data Research Lab · Bugiri, Uganda</p>
          <h1 className="max-w-[760px] text-[clamp(3rem,7vw,6rem)] leading-[0.96] text-primary-foreground">
            Building trust in data &amp; systems.
          </h1>
          <p className="mt-7 max-w-[590px] text-base leading-7 text-primary-foreground/75 md:text-lg">
            We build tools, run research, and train teams so African businesses, governments, and communities can trust the systems they depend on.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link to="/about">About the lab <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <Link to="/work">Explore our work</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-16 max-w-[1240px] px-4 md:px-8">
        <div className="grid overflow-hidden border border-border bg-card shadow-[var(--shadow-float)] md:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="flex min-h-[190px] flex-col justify-center bg-foreground p-7 text-background md:p-9">
            <div className="accent-bar mb-6" />
            <h2 className="text-3xl leading-tight">Trust, built for real conditions.</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-background/65">Independent research meets practical tools, field knowledge, and accountable implementation.</p>
          </div>
          {highlights.map((item, index) => (
            <Link key={item.label} to={item.to} className={`group flex min-h-[190px] flex-col justify-between border-t border-border p-7 no-underline transition-colors md:border-l md:border-t-0 ${index === 0 ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground hover:bg-muted"}`}>
              <item.icon className="size-6" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl leading-tight">{item.label}</h3>
                <p className={`mt-2 text-xs leading-5 ${index === 0 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{item.detail}</p>
                <ArrowRight className="mt-4 size-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function EditorialIntro() {
  return (
    <section className="bg-background pb-24 pt-24 md:pb-32 md:pt-36">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 md:grid-cols-2 md:px-8 lg:gap-20">
        <div>
          <p className="eyebrow mb-4 text-primary">Grounded in real conditions</p>
          <h2 className="text-[clamp(2.4rem,4vw,4.3rem)] leading-[1.02] text-foreground">Security research that survives contact with the real world.</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">From field collection and privacy engineering to threat intelligence and responsible AI, we pair rigorous research with the realities of infrastructure, language, and access.</p>
          <Button asChild variant="link" className="mt-6 h-auto p-0 text-primary"><Link to="/work">See all core activities <ArrowRight /></Link></Button>
        </div>
        <Link to="/work/data-collection-translation-integrity" className="group relative block aspect-[16/11] overflow-hidden bg-muted">
          <img src="/images/fieldwork.jpg" alt="Researchers working in the field" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,hsl(var(--foreground)/0.88))] p-7 pt-20 text-background">
            <span className="text-sm font-semibold">Secure data collection</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

function CoreActivities() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.5fr] md:gap-20">
          <div>
            <p className="eyebrow mb-4 text-primary">Core activities</p>
            <h2 className="text-[clamp(2.3rem,4vw,4rem)] leading-[1.04] text-foreground">Place security and data governance at the heart of every system.</h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">Nine connected areas of practice, from the first field record to the systems making consequential decisions.</p>
          </div>
          <div className="border-t border-border">
            {activityAreas.map((area, index) => (
              <Link key={area.slug} to={`/work/${area.slug}`} className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-border py-5 no-underline">
                <span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-lg text-foreground transition-colors group-hover:text-primary md:text-xl">{area.title}</span>
                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LatestPosts() {
  const posts = [...blogPosts].sort((a, b) => b.published_at.localeCompare(a.published_at)).slice(0, 3);
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div><p className="eyebrow mb-4 text-primary">Latest thinking</p><h2 className="text-[clamp(2.4rem,4vw,4rem)] leading-none text-foreground">Changing the way we secure data and systems.</h2></div>
          <Button asChild variant="outline"><Link to="/blog">Read all stories <ArrowRight /></Link></Button>
        </div>
        <div className="grid border-y border-border md:grid-cols-3">
          {posts.map((post, index) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className={`group py-7 no-underline md:px-7 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : "md:pl-0"}`}>
              <div className="aspect-[16/10] overflow-hidden bg-muted"><img src={post.cover_image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div>
              <p className="eyebrow mb-3 mt-6 text-primary">{post.tag}</p>
              <h3 className="text-2xl leading-tight text-foreground">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function UpcomingEvents() {
  const [events, setEvents] = useState<EventRow[]>([]);
  useEffect(() => {
    supabase.from("events").select("*").eq("published", true).gte("start_date", new Date().toISOString()).order("start_date").limit(3).then(({ data }) => setEvents((data as EventRow[]) || []));
  }, []);
  if (events.length === 0) return null;
  return (
    <section className="bg-secondary py-20 md:py-24">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <div className="mb-9 flex items-end justify-between gap-5"><div><p className="eyebrow mb-3 text-primary">Gather with us</p><h2 className="text-4xl text-foreground">Upcoming events</h2></div><Button asChild variant="link" className="text-primary"><Link to="/events">All events <ArrowRight /></Link></Button></div>
        <div className="divide-y divide-border border-y border-border">
          {events.map((event) => (
            <Link key={event.id} to={`/events/${event.slug}`} className="group grid gap-4 py-6 no-underline md:grid-cols-[180px_1fr_260px_auto] md:items-center">
              <span className="font-mono text-xs uppercase text-primary">{new Date(event.start_date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
              <h3 className="text-xl text-foreground">{event.title}</h3>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">{event.location_type === "online" ? <Monitor className="size-4" /> : <MapPin className="size-4" />}{event.location || "Details online"}</span>
              <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerBand() {
  const partners = ["techbuzzhub", "geolens", "tensorview", "fencher", "tonative", "intellisys", "aieswatini", "zindi"];
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-[1240px] px-6 md:px-8">
        <p className="eyebrow mb-10 text-center text-muted-foreground">Partners &amp; associates</p>
        <div className="grid grid-cols-2 items-center border-l border-t border-border sm:grid-cols-4">
          {partners.map((partner) => <div key={partner} className="flex h-28 items-center justify-center border-b border-r border-border bg-card p-7"><img src={`/images/partners/${partner}.png`} alt={partner} className="max-h-12 max-w-[75%] object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0" /></div>)}
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return <div className="home-page"><Hero /><EditorialIntro /><CoreActivities /><LatestPosts /><UpcomingEvents /><PartnerBand /></div>;
}
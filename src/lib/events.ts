export type LocationType = "online" | "in_person" | "hybrid";
export type RegistrationStatus = "pending" | "approved" | "declined" | "waitlist" | "cancelled";

export interface EventRow {
  id: string;
  slug: string;
  title: string;
  description: string;
  cover_image: string | null;
  event_type: string;
  location_type: LocationType;
  location: string | null;
  meeting_url: string | null;
  start_date: string;
  end_date: string | null;
  max_capacity: number | null;
  is_free: boolean;
  registration_open: boolean;
  require_approval: boolean;
  published: boolean;
  created_at: string;
}

export interface RegistrationRow {
  id: string;
  event_id: string;
  full_name: string;
  email: string;
  organisation: string | null;
  status: RegistrationStatus;
  access_token: string;
  checked_in: boolean;
  checked_in_at: string | null;
  created_at: string;
}

export interface RegistrationAccess {
  full_name: string;
  status: RegistrationStatus;
  event_title: string;
  event_start: string;
  event_location: string | null;
  event_location_type: LocationType;
  meeting_url: string | null;
  checked_in: boolean;
}

export const EVENT_TYPES = ["Workshop", "Webinar", "Conference", "Training", "Meetup", "Talk"];

export function formatEventDate(start: string, end: string | null): string {
  const s = new Date(start);
  const dateOpts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" };
  if (!end) return s.toLocaleDateString("en-GB", dateOpts);
  const e = new Date(end);
  const startPart = `${s.toLocaleDateString("en-GB", { day: "numeric", hour: "2-digit", minute: "2-digit" })}`;
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
    return `${startPart} – ${e.toLocaleDateString("en-GB", dateOpts)}`;
  }
  return `${s.toLocaleDateString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })} – ${e.toLocaleDateString("en-GB", dateOpts)}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

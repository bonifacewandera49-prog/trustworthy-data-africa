import { useParams, Link } from "react-router-dom";

export default function AdminEventDetail() {
 const { id } = useParams<{ id: string }>();

 return (
 <div>
 <div className="flex items-center gap-2 mb-6">
 <Link to="/admin/events" className="text-sm underline" style={{ color: "var(--orange)" }}>&larr; Back to Events</Link>
 </div>
 <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--dark-text)" }}>Event: {id}</h1>
 <div className="rounded-lg border p-6" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
 <p style={{ color: "var(--dark-text-secondary)" }}>Event management interface. Registrations, attendee list, and settings would appear here.</p>
 </div>
 </div>
 );
}

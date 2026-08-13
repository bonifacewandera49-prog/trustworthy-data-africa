import { Link } from "react-router-dom";

export default function NotFound() {
 return (
 <div className="min-h-screen flex items-center justify-center" style={{ background: "hsl(var(--muted))" }}>
 <div className="text-center">
 <h1 className="mb-4 text-4xl font-bold" style={{ color: "var(--dark-text)" }}>404</h1>
 <p className="mb-4 text-xl" style={{ color: "var(--dark-text-muted)" }}>Oops! Page not found</p>
 <Link to="/" className="underline" style={{ color: "var(--orange)" }}>Return to Home</Link>
 </div>
 </div>
 );
}

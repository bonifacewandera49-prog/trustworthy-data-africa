import { Link, useLocation } from "react-router-dom";
import { FileText, Calendar, BookOpen, Database, BarChart3, Users, LogOut } from "lucide-react";

const navItems = [
  { to: "/admin", label: "Blog", icon: <FileText className="w-4 h-4" /> },
  { to: "/admin/events", label: "Events", icon: <Calendar className="w-4 h-4" /> },
  { to: "/admin/papers", label: "Papers", icon: <BookOpen className="w-4 h-4" /> },
  { to: "/admin/reports", label: "Reports", icon: <BarChart3 className="w-4 h-4" /> },
  { to: "/admin/datasets", label: "Datasets", icon: <Database className="w-4 h-4" /> },
  { to: "/admin/team", label: "Team", icon: <Users className="w-4 h-4" /> },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex" style={{ background: "hsl(var(--background))" }}>
      <aside className="w-56 border-r flex flex-col gap-1 shrink-0 p-4" style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--hairline))" }}>
        <h2 className="font-bold text-sm mb-4 px-3" style={{ color: "var(--dark-text)" }}>Admin Panel</h2>
        {navItems.map((n) => (
          <Link key={n.to} to={n.to}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm no-underline transition-colors"
            style={location.pathname === n.to ? { background: "var(--orange)", color: "var(--dark-text)" } : { color: "var(--dark-text-muted)" }}>
            {n.icon} {n.label}
          </Link>
        ))}
        <div className="mt-auto pt-4 border-t" style={{ borderColor: "hsl(var(--hairline))" }}>
          <Link to="/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm no-underline transition-colors" style={{ color: "var(--dark-text-muted)" }}>
            <LogOut className="w-4 h-4" /> Exit Admin
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}

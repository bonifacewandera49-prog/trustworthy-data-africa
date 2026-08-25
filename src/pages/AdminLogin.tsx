import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { session, isAdmin, loading: authLoading } = useAuth();

  const from = (location.state as { from?: string } | null)?.from || "/admin";

  useEffect(() => {
    if (!authLoading && session && isAdmin) navigate(from, { replace: true });
  }, [authLoading, session, isAdmin, from, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error: err } = await supabase.auth.signInWithPassword({ email, password });
    if (err) {
      setError(err.message);
      setLoading(false);
      return;
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "hsl(var(--background))" }}>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold text-center mb-6" style={{ color: "var(--dark-text)" }}>Admin Login</h1>
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg text-[0.86rem] outline-none" style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} />
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg text-[0.86rem] outline-none" style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} />
        {error && <p className="text-xs text-center" style={{ color: "#f87171" }}>{error}</p>}
        {session && !isAdmin && !authLoading && (
          <p className="text-xs text-center" style={{ color: "#fbbf24" }}>This account does not have admin access.</p>
        )}
        <button type="submit" disabled={loading} className="w-full py-3 rounded-lg font-semibold text-[0.86rem] border-none cursor-pointer transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)", opacity: loading ? 0.5 : 1 }}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

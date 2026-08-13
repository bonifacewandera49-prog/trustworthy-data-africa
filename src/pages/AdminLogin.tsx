import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setLoading(true);
 setTimeout(() => {
 setLoading(false);
 navigate("/admin");
 }, 500);
 };

 return (
 <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "hsl(var(--background))" }}>
 <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
 <h1 className="text-2xl font-bold text-center mb-6" style={{ color: "var(--dark-text)" }}>Admin Login</h1>
 <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}
 className="w-full p-3 rounded-lg text-[0.86rem] outline-none" style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} />
 <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}
 className="w-full p-3 rounded-lg text-[0.86rem] outline-none" style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} />
 <button type="submit" className="w-full py-3 rounded-lg font-semibold text-[0.86rem] border-none cursor-pointer transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)", opacity: loading ? 0.5 : 1 }}>
 {loading ? "Signing in..." : "Sign In"}
 </button>
 </form>
 </div>
 );
}

import { Link } from "react-router-dom";
import WavePattern from "@/components/WavePattern";

interface HeroProps {
  tag?: string;
  title: string;
  subtitle: string;
  actions?: { label: string; to: string; variant?: "primary" | "outline" | "ghost" }[];
}

export default function Hero({ tag, title, subtitle, actions }: HeroProps) {
  return (
    <div className="relative pt-28 pb-[88px] px-[clamp(1.5rem,4vw,4rem)] overflow-hidden" style={{ textAlign: "center" }}>
      <div className="absolute bottom-0 left-0 w-full h-16 pointer-events-none">
        <WavePattern opacity={0.08} />
      </div>
      <div className="max-w-[740px] mx-auto">
        {tag && (
          <p className="rv font-mono text-[0.74rem] font-medium tracking-widest uppercase mb-4" style={{ color: "var(--orange)" }}>
            {tag}
          </p>
        )}
        <h1 className="rv font-bold tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 2.9rem)", lineHeight: 1.12, color: "var(--dark-text)" }}>
          {title}
        </h1>
        <p className="rv text-[0.95rem] leading-[1.85] max-w-[600px] mx-auto" style={{ color: "var(--dark-text-secondary)" }}>
          {subtitle}
        </p>
        {actions && actions.length > 0 && (
          <div className="rv flex gap-2.5 justify-center mt-6 flex-wrap">
            {actions.map((a) =>
              a.variant === "ghost" ? (
                <Link key={a.label} to={a.to} className="text-[0.86rem] font-medium cursor-pointer no-underline px-4 py-2.5 transition-colors inline-flex items-center" style={{ color: "var(--dark-text-secondary)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--dark-text)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dark-text-secondary)")}>
                  {a.label} &rarr;
                </Link>
              ) : a.variant === "outline" ? (
                <Link key={a.label} to={a.to} className="border px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-all inline-flex items-center" style={{ background: "transparent", borderColor: "var(--dark-hairline)", color: "var(--dark-text-secondary)" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--dark-text-secondary)"; e.currentTarget.style.color = "var(--dark-text)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--dark-hairline)"; e.currentTarget.style.color = "var(--dark-text-secondary)"; }}>
                  {a.label}
                </Link>
              ) : (
                <Link key={a.label} to={a.to} className="px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors inline-flex items-center" style={{ background: "var(--orange)", color: "#fff" }} onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")} onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
                  {a.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

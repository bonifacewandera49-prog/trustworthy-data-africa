import { Link } from "react-router-dom";
import logo from "/images/solid-elf-logo.png";

export default function Footer() {
  return (
    <footer
      className="relative z-[1] border-t"
      style={{ background: "var(--dark-surface)", borderColor: "var(--dark-hairline)" }}
    >
      <div className="py-12 px-[clamp(1.5rem,4vw,4rem)]">
        <div className="max-w-[1240px] mx-auto flex justify-between gap-11 flex-wrap">
          <div className="max-w-[280px]">
            <img src={logo} alt="Solid Elf" className="h-16 w-auto mb-3.5" />
            <p className="text-[0.8rem] leading-relaxed" style={{ color: "var(--dark-text-muted)" }}>
              A Cybersecurity and Data Research Lab. We build the tools,
              frameworks, and datasets that keep systems secure and make data
              trustworthy and usable.
            </p>
          </div>
          <div className="flex gap-10 flex-wrap">
            <div className="flex flex-col gap-1 min-w-[110px]">
              <h4 className="text-[0.68rem] font-semibold tracking-wider uppercase mb-2" style={{ color: "var(--dark-text-secondary)" }}>
                Who We Are
              </h4>
              <Link to="/about" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>About</Link>
              <Link to="/mission" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Mission</Link>
              <Link to="/team" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Team</Link>
              <Link to="/sectors" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Sectors</Link>
            </div>
            <div className="flex flex-col gap-1 min-w-[110px]">
              <h4 className="text-[0.68rem] font-semibold tracking-wider uppercase mb-2" style={{ color: "var(--dark-text-secondary)" }}>
                What We Do
              </h4>
              <Link to="/work" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Research Areas</Link>
              <Link to="/consultancy" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Consultancy</Link>
            </div>
            <div className="flex flex-col gap-1 min-w-[110px]">
              <h4 className="text-[0.68rem] font-semibold tracking-wider uppercase mb-2" style={{ color: "var(--dark-text-secondary)" }}>
                Resources
              </h4>
              <Link to="/research" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Papers</Link>
              <Link to="/datasets" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Datasets</Link>
              <Link to="/reports" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Reports</Link>
            </div>
            <div className="flex flex-col gap-1 min-w-[110px]">
              <h4 className="text-[0.68rem] font-semibold tracking-wider uppercase mb-2" style={{ color: "var(--dark-text-secondary)" }}>
                Get Involved
              </h4>
              <Link to="/partnerships" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Partnerships</Link>
              <Link to="/opportunities" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Opportunities</Link>
              <Link to="/events" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Events</Link>
              <Link to="/apply" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Join the Team</Link>
              <Link to="/contact" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[clamp(1.5rem,4vw,4rem)] py-4 border-t" style={{ background: "rgba(0,0,0,0.2)", borderColor: "var(--dark-hairline)" }}>
        <div className="max-w-[1240px] mx-auto flex justify-between items-center flex-wrap gap-2.5">
          <span className="text-[0.7rem]" style={{ color: "var(--dark-text-muted)" }}>
            &copy; 2026 Solid Elf Security and Data Lab. All rights reserved.
          </span>
          <div className="flex gap-4">
            <Link to="/policies" className="text-[0.7rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Privacy Policy</Link>
            <Link to="/policies" className="text-[0.7rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Terms</Link>
            <Link to="/policies" className="text-[0.7rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Data Protection</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

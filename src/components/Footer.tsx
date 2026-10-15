import { Link } from "react-router-dom";
import { site } from "@/data/site";
import Brand from "@/components/Brand";

export default function Footer() {
  return (
    <footer
      className="site-footer relative z-[1]"
      style={{ background: "#0b0b0b", borderColor: "var(--dark-hairline)" }}
    >
      <div className="py-12 px-[clamp(1.5rem,4vw,4rem)]">
        <div className="max-w-[1240px] mx-auto flex justify-between gap-11 flex-wrap">
          <div className="max-w-[280px]">
            <Brand />
            <p className="text-[0.8rem] leading-relaxed" style={{ color: "var(--dark-text-muted)" }}>
              A Security and Data Research Firm. We connect secure collection, quality control, storage, processing and responsible use—protecting data and its integrity throughout the lifecycle.
            </p><address className="text-xs leading-6 mt-4 not-italic" style={{color:"#d5cec8"}}>{site.address}<br/><a href={`tel:${site.phone}`}>{site.phone}</a><br/><a href={`mailto:${site.email}`}>{site.email}</a></address><div className="flex flex-wrap gap-x-3 gap-y-2 mt-4 text-xs" style={{color:"#e7ddd5"}}>{site.socials.map(s=><a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.name}</a>)}</div>
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
              <Link to="/consultancy" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Consultancy and Services</Link>
              <Link to="/work" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Research</Link>
            </div>
            <div className="flex flex-col gap-1 min-w-[110px]">
              <h4 className="text-[0.68rem] font-semibold tracking-wider uppercase mb-2" style={{ color: "var(--dark-text-secondary)" }}>
                Resources
              </h4>
              <Link to="/short-courses" className="text-[0.8rem] hover:underline">Short Courses</Link>
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
              <Link to="/apply" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Join Our Community</Link>
              <Link to="/contact" className="text-[0.8rem] no-underline transition-colors hover:underline" style={{ color: "var(--dark-text-muted)" }}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[clamp(1.5rem,4vw,4rem)] py-4 border-t" style={{ background: "rgba(0,0,0,0.2)", borderColor: "var(--dark-hairline)" }}>
        <div className="max-w-[1240px] mx-auto flex justify-between items-center flex-wrap gap-2.5">
          <span className="text-[0.7rem]" style={{ color: "var(--dark-text-muted)" }}>
            &copy; 2026 Solid Elf Security and Data Research. All rights reserved.
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

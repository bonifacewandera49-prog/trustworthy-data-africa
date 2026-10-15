import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bug,
  BrainCircuit,
  Users,
  Target,
  Microscope,
  BookOpen,
  Database,
  FileText,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Brand from "@/components/Brand";

interface MegaMenuItem {
  to: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
}

interface MegaMenuData {
  items: MegaMenuItem[];
  featured?: {
    to: string;
    title: string;
    desc: string;
    img: string;
  };
}

const megaMenus: Record<string, MegaMenuData> = {
  "Who We Are": {
    items: [
      { to: "/about", label: "About Us", desc: "Our story, values, and what sets us apart", icon: <Users className="w-5 h-5" style={{ color: "var(--orange)" }} /> },
      { to: "/mission", label: "Mission & Vision", desc: "The commitments that guide our work", icon: <Target className="w-5 h-5" style={{ color: "var(--orange)" }} /> },
      { to: "/team", label: "Our Team", desc: "The researchers and practitioners behind our work", icon: <GraduationCap className="w-5 h-5" style={{ color: "var(--orange)" }} /> },
      { to: "/sectors", label: "Sectors", desc: "Health, finance, agriculture, education, government", icon: <Briefcase className="w-5 h-5" style={{ color: "var(--orange)" }} /> },
    ],
    featured: {
      to: "/about",
      title: "Cybersecurity. Data. Global.",
      desc: "We build the tools, frameworks, and datasets that keep systems secure and make data trustworthy and usable.",
      img: "/images/editorial/security.webp",
    },
  },
  "What We Do": {
    items: [
      { to: "/consultancy", label: "Consultancy", desc: "Security, digital safety, data analytics and practical advisory", icon: <BookOpen className="w-5 h-5" style={{ color: "var(--orange)" }} /> },
      { to: "/work", label: "Services & Research", desc: "The areas we actively research, publish, and build tools in", icon: <Microscope className="w-5 h-5" style={{ color: "var(--orange)" }} /> },
      { to: "/consultancy/data-analytics-business-intelligence", label: "Data Analytics", desc: "Analysis, dashboards and business intelligence", icon: <Database className="w-5 h-5" style={{ color: "var(--orange)" }} /> },
      { to: "/consultancy/cybersecurity-digital-safety", label: "Cybersecurity & Digital Safety", desc: "Practical security strategy and incident readiness", icon: <Bug className="w-5 h-5" style={{ color: "var(--orange)" }} /> },
    ],
    featured: {
      to: "/work",
      title: "Data lifecycle, end to end.",
      desc: "From collection to governance - we research, build, and train across every stage of the data pipeline.",
      img: "/images/editorial/government.webp",
    },
  },
  Resources: {
    items: [
      { to: "/research", label: "Research Papers", desc: "Peer-reviewed publications and findings", icon: <FileText className="w-5 h-5" style={{ color: "var(--orange)" }} /> },
      { to: "/datasets", label: "Datasets", desc: "Open, citable datasets on Zenodo", icon: <Database className="w-5 h-5" style={{ color: "var(--orange)" }} /> },
      { to: "/reports", label: "Reports", desc: "In-depth analysis and methodology reports", icon: <BookOpen className="w-5 h-5" style={{ color: "var(--orange)" }} /> },
    ],
    featured: {
      to: "/research",
      title: "Open knowledge, open data.",
      desc: "All our research outputs are freely accessible - because data challenges need collaborative solutions.",
      img: "/images/editorial/research.webp",
    },
  },
  "Our Products": {
    items: [
      { to: "/solutions/canarydrop", label: "CanaryDrop", desc: "Breach detection calibrated to real-world threat patterns", icon: <Bug className="w-5 h-5" style={{ color: "var(--orange)" }} /> },
      { to: "/solutions/qkabrine", label: "Qkabrine", desc: "Quantum ML & AutoML platform for research teams", icon: <BrainCircuit className="w-5 h-5" style={{ color: "var(--orange)" }} /> },
    ],
    featured: {
      to: "/solutions/qkabrine",
      title: "Tools built for the future.",
      desc: "Purpose-built solutions addressing security and data challenges with cutting-edge quantum and classical approaches.",
      img: "/images/editorial/data.webp",
    },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);
  }, [location]);

  const toggleMobileSection = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      className={`sticky top-0 z-[200] border-b transition-shadow ${scrolled ? "shadow-lg shadow-black/20" : ""}`}
      style={{ background: "var(--nav-bg)", backdropFilter: "blur(16px) saturate(140%)", WebkitBackdropFilter: "blur(16px) saturate(140%)", borderColor: "var(--nav-hairline)" }}
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-between px-[clamp(1rem,4vw,2rem)] min-h-[108px]">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <Brand />
        </Link>

        <div className="hidden xl:flex items-center gap-0.5">
          {Object.entries(megaMenus).map(([label, data]) => (
            <div key={label} className="relative" onMouseEnter={() => setOpenMenu(label)} onMouseLeave={() => setOpenMenu(null)}>
              <button type="button" aria-expanded={openMenu === label} onClick={() => setOpenMenu(openMenu === label ? null : label)} className="text-[0.83rem] font-medium px-3 py-2 cursor-pointer flex items-center gap-1 rounded-lg transition-colors" style={{ color: "var(--nav-text)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--nav-text-strong)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--nav-text)")}>
                {label} <small className="text-[0.6rem] opacity-40">&#9662;</small>
              </button>
              <div inert={openMenu !== label} className={`fixed left-1/2 -translate-x-1/2 pt-3 z-[300] transition-all duration-200 ${openMenu === label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`} style={{ width: "min(680px, 90vw)" }}>
                <div className="rounded-2xl overflow-hidden" style={{ background: "var(--nav-surface)", border: "1px solid var(--nav-hairline)", boxShadow: "0 24px 48px -16px rgba(23,18,14,0.28)" }}>
                  <div className="grid grid-cols-[1fr_240px]">
                    <div className="p-4 flex flex-col gap-0.5">
                      <span className="text-[0.65rem] font-semibold tracking-widest uppercase px-3 pt-1 pb-2" style={{ color: "var(--nav-text-muted)" }}>{label}</span>
                      {data.items.map((item) => (
                        <Link key={item.to} to={item.to} className="flex items-start gap-3 px-3 py-3 text-[0.84rem] no-underline rounded-xl transition-all group" style={{ color: "var(--nav-text)" }} onMouseEnter={(e) => { e.currentTarget.style.background = "var(--nav-elevated)"; e.currentTarget.style.color = "var(--nav-text-strong)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--nav-text)"; }}>
                          <span className="mt-0.5 shrink-0 p-1.5 rounded-lg transition-colors" style={{ background: "var(--nav-elevated)" }}>{item.icon}</span>
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium transition-colors">{item.label}</span>
                            <span className="text-[0.72rem] leading-snug font-normal" style={{ color: "var(--nav-text-muted)" }}>{item.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    {data.featured && (
                      <Link to={data.featured.to} className="no-underline flex flex-col border-l" style={{ borderColor: "var(--nav-hairline)", background: "var(--nav-elevated)" }}>
                        
                        <div className="p-4 flex flex-col gap-1.5 flex-1">
                          <span className="text-[0.82rem] font-semibold leading-tight" style={{ color: "var(--nav-text-strong)" }}>{data.featured.title}</span>
                          <span className="text-[0.72rem] leading-relaxed" style={{ color: "var(--nav-text)" }}>{data.featured.desc}</span>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Link to="/blog" className="text-[0.83rem] font-medium px-3 py-2 no-underline rounded-lg transition-colors" style={{ color: "var(--nav-text)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--nav-text-strong)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--nav-text)")}>Blog</Link>
          <Link to="/events" className="text-[0.83rem] font-medium px-3 py-2 no-underline rounded-lg transition-colors" style={{ color: "var(--nav-text)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--nav-text-strong)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--nav-text)")}>Events</Link>
          <Link to="/contact" className="text-[0.83rem] font-medium px-3 py-2 no-underline rounded-lg transition-colors" style={{ color: "var(--nav-text)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--nav-text-strong)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--nav-text)")}>Contact</Link>
        </div>

        <Link to="/partnerships" className="hidden xl:inline-flex text-[0.78rem] font-semibold px-5 py-2.5 rounded-lg no-underline transition-colors ml-2 whitespace-nowrap" style={{ background: "var(--orange)", color: "#fff" }} onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")} onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
          Partner With Us
        </Link>

        <button aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} className="xl:hidden flex items-center justify-center p-2 bg-transparent border-none cursor-pointer" style={{ color: "var(--nav-text)" }} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden flex flex-col p-4 px-7 overflow-y-auto" style={{ maxHeight: "calc(100vh - 108px)", background: "var(--nav-elevated)", borderTop: "1px solid var(--nav-hairline)" }}>
          {Object.entries(megaMenus).map(([label, data]) => (
            <div key={label} style={{ borderBottom: "1px solid var(--nav-hairline)" }}>
              <button aria-expanded={mobileExpanded === label} onClick={() => toggleMobileSection(label)} className="flex items-center justify-between w-full text-left text-[0.82rem] font-semibold tracking-wider uppercase py-3 bg-transparent border-none cursor-pointer" style={{ color: "var(--nav-text-muted)" }}>
                {label}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === label ? "rotate-180" : ""}`} />
              </button>
              <div inert={mobileExpanded !== label} className={`overflow-hidden transition-all duration-200 ${mobileExpanded === label ? "max-h-[500px] pb-2" : "max-h-0"}`}>
                {data.items.map((item) => (
                  <Link key={item.to} to={item.to} className="flex items-center gap-2.5 text-[0.9rem] py-2.5 pl-2 no-underline" style={{ color: "var(--nav-text)" }}>
                    {item.icon} {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link to="/blog" className="text-[0.9rem] py-2.5 no-underline" style={{ color: "var(--nav-text)", borderBottom: "1px solid var(--nav-hairline)" }}>Blog</Link>
          <Link to="/events" className="text-[0.9rem] py-2.5 no-underline" style={{ color: "var(--nav-text)", borderBottom: "1px solid var(--nav-hairline)" }}>Events</Link>
          <Link to="/contact" className="text-[0.9rem] py-2.5 no-underline" style={{ color: "var(--nav-text)", borderBottom: "1px solid var(--nav-hairline)" }}>Contact</Link>
          <Link to="/partnerships" className="border-none p-3 rounded-lg font-semibold text-[0.86rem] cursor-pointer mt-3.5 text-center no-underline" style={{ background: "var(--orange)", color: "#fff" }}>
            Partner With Us
          </Link>
        </div>
      )}
    </nav>
  );
}

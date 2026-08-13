const partners = [
  { name: "TechBuzzHub", logo: "/images/partners/techbuzzhub.png" },
  { name: "GeoLens", logo: "/images/partners/geolens.png" },
  { name: "Tensor View", logo: "/images/partners/tensorview.png" },
  { name: "Fencher Technologies", logo: "/images/partners/fencher.png" },
  { name: "Tonative", logo: "/images/partners/tonative.png" },
  { name: "IntelliSys", logo: "/images/partners/intellisys.png" },
  { name: "AI Eswatini", logo: "/images/partners/aieswatini.png" },
  { name: "Zindi Africa", logo: "/images/partners/zindi.png" },
];

export default function PartnersSection() {
  return (
    <div
      className="rv rounded-2xl py-20 md:py-24 px-8 md:px-16 border border-[var(--dark-hairline)]"
      style={{
        background: "var(--dark-surface)",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    >
      <div className="mb-14 text-center">
        <h2 className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight mb-2" style={{ color: "var(--dark-text)" }}>
          Partners &amp; Associates
        </h2>
        <div className="w-16 h-1 rounded-full mx-auto" style={{ background: "var(--orange)" }} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 sm:gap-x-16 gap-y-14 items-center justify-items-center max-w-[1000px] mx-auto">
        {partners.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-center w-full"
            title={p.name}
          >
            <img
              src={p.logo}
              alt={p.name}
              className="h-12 sm:h-14 w-auto object-contain brightness-0 invert opacity-55 hover:opacity-90 transition-all duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

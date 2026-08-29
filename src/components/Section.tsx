import WavePattern from "@/components/WavePattern";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  style?: React.CSSProperties;
}

export default function Section({ children, className, narrow, style }: SectionProps) {
  return (
    <section
      className={`relative py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] ${className || ""}`}
      style={{
        background: "var(--dark-base)",
        ...style,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-4 overflow-hidden pointer-events-none">
        <WavePattern opacity={0.1} />
      </div>
      <div className={`mx-auto ${narrow ? "max-w-[680px]" : "max-w-[1240px]"}`}>
        {children}
      </div>
    </section>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  style?: React.CSSProperties;
}

export default function Section({ children, className, narrow, style }: SectionProps) {
  return (
    <section
      className={`py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] ${className || ""}`}
      style={{
        background: "var(--dark-base)",
        borderTop: "1px solid var(--dark-hairline)",
        ...style,
      }}
    >
      <div className={`mx-auto ${narrow ? "max-w-[680px]" : "max-w-[1140px]"}`}>
        {children}
      </div>
    </section>
  );
}

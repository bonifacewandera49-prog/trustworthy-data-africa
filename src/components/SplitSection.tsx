interface SplitSectionProps {
  image?: string;
  reverse?: boolean;
  children: React.ReactNode;
  imageHeight?: string;
  eyebrow?: string;
}

// Text is the default. A missing photograph never reserves an empty panel.
export default function SplitSection({ children, eyebrow }: SplitSectionProps) {
  return <div className="editorial-section grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-5 md:gap-12 border-t pt-7" style={{ borderColor: "var(--dark-hairline)" }}>
    <div>{eyebrow && <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--orange)" }}>{eyebrow}</p>}</div>
    <div className="max-w-[780px] min-w-0">{children}</div>
  </div>;
}

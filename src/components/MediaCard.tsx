interface MediaCardProps {
  image: string;
  tag: string;
  title: string;
  description: string;
  meta?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function MediaCard({
  image,
  tag,
  title,
  description,
  meta,
  actionLabel,
  onAction,
}: MediaCardProps) {
  return (
    <div
      className="rv rounded-lg overflow-hidden transition-colors"
      style={{
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--hairline))",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "hsl(var(--primary))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "hsl(var(--hairline))";
      }}
    >
      <div
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})`, opacity: 0.4 }}
      />
      <div className="p-5">
        <span
          className="font-mono text-[0.66rem] tracking-widest uppercase mb-2 block"
          style={{ color: "var(--orange)" }}
        >
          {tag}
        </span>
        <h3
          className="text-[0.9rem] font-semibold mb-2 leading-snug"
          style={{ color: "var(--dark-text)" }}
        >
          {title}
        </h3>
        <p
          className="text-[0.8rem] leading-relaxed mb-2.5"
          style={{ color: "var(--dark-text-muted)" }}
        >
          {description}
        </p>
        <div
          className="font-mono text-[0.68rem] flex justify-between items-center"
          style={{ color: "var(--dark-text-muted)" }}
        >
          {meta && <span>{meta}</span>}
          {actionLabel && (
            <span
              className="font-semibold cursor-pointer"
              style={{ color: "var(--orange)" }}
              onClick={onAction}
            >
              {actionLabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

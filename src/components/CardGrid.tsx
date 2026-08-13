interface CardItem {
  icon?: string;
  title: string;
  description: string;
  onClick?: () => void;
}

export default function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3.5">
      {items.map((item, i) => (
        <div
          key={i}
          className="rv border rounded-lg p-6 transition-all cursor-default"
          style={{
            background: "hsl(var(--card))",
            borderColor: "hsl(var(--hairline))",
          }}
          onClick={item.onClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "hsl(var(--primary))";
            e.currentTarget.style.background = "hsl(var(--bg3))";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "hsl(var(--hairline))";
            e.currentTarget.style.background = "hsl(var(--card))";
          }}
        >
          <span
            className="font-mono text-[0.78rem] block mb-3"
            style={{ color: "hsl(var(--accent))" }}
          >
            {item.icon || `0${i + 1}`}
          </span>
          <h3
            className="text-[0.88rem] font-semibold mb-1.5"
            style={{ color: "var(--dark-text)" }}
          >
            {item.title}
          </h3>
          <p className="text-[0.8rem] leading-relaxed" style={{ color: "var(--dark-text-muted)" }}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

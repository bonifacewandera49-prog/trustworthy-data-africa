import { ChevronDown } from "lucide-react";

interface FilterDropdownProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
  label?: string;
}

export default function FilterDropdown({ categories, active, onChange, label = "Filter by" }: FilterDropdownProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-[0.7rem] tracking-widest uppercase" style={{ color: "var(--dark-text-muted)" }}>
        {label}
      </span>
      <div className="relative">
        <select
          value={active}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none pl-4 pr-10 py-2.5 rounded-lg text-[0.84rem] font-medium cursor-pointer outline-none transition-colors"
          style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", color: "var(--dark-text)" }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat} style={{ background: "hsl(var(--card))", color: "var(--dark-text)" }}>
              {cat}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: "var(--dark-text-muted)" }} />
      </div>
      {active !== "All" && (
        <button onClick={() => onChange("All")} className="text-[0.78rem] cursor-pointer bg-transparent border-none transition-colors hover:underline" style={{ color: "var(--orange)" }}>
          Clear
        </button>
      )}
    </div>
  );
}

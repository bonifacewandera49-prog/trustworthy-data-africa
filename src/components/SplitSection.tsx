import WavePattern from "@/components/WavePattern";

interface SplitSectionProps {
  image?: string;
  reverse?: boolean;
  children: React.ReactNode;
  imageHeight?: string;
  eyebrow?: string;
}

function DecorativePanel({ height, eyebrow }: { height: string; eyebrow?: string }) {
  return (
    <div
      className="rv rounded-lg border relative overflow-hidden flex items-center justify-center"
      style={{
        height,
        borderColor: "var(--dark-hairline)",
        background:
          "linear-gradient(155deg, var(--dark-surface) 0%, var(--dark-elevated) 100%)",
      }}
    >
      <div className="absolute bottom-0 left-0 w-full h-2/3 pointer-events-none">
        <WavePattern opacity={0.09} />
      </div>
      <div className="relative z-[1] px-6 text-center">
        <span
          className="block w-10 h-[3px] rounded-full mx-auto mb-4"
          style={{ background: "var(--orange)" }}
        />
        {eyebrow && (
          <span
            className="font-mono text-[0.7rem] tracking-widest uppercase"
            style={{ color: "var(--dark-text-muted)" }}
          >
            {eyebrow}
          </span>
        )}
      </div>
    </div>
  );
}

export default function SplitSection({ image, reverse, children, imageHeight = "280px", eyebrow }: SplitSectionProps) {
  const visual = image ? (
    <div className="rv rounded-lg overflow-hidden border" style={{ height: imageHeight, borderColor: "var(--dark-hairline)" }}>
      <img src={image} alt="" className="w-full h-full object-cover" style={{ opacity: 0.5 }} loading="lazy" />
    </div>
  ) : (
    <DecorativePanel height={imageHeight} eyebrow={eyebrow} />
  );

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-9 items-center mb-5 ${reverse ? "direction-rtl" : ""}`}>
      {reverse ? (
        <>
          <div className="rv" style={{ direction: "ltr" }}>{children}</div>
          {visual}
        </>
      ) : (
        <>
          {visual}
          <div className="rv" style={{ direction: "ltr" }}>{children}</div>
        </>
      )}
    </div>
  );
}

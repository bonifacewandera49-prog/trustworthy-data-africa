interface SplitSectionProps {
  image: string;
  reverse?: boolean;
  children: React.ReactNode;
  imageHeight?: string;
}

export default function SplitSection({ image, reverse, children, imageHeight = "280px" }: SplitSectionProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-9 items-center mb-5 ${reverse ? "direction-rtl" : ""}`}>
      {reverse ? (
        <>
          <div className="rv" style={{ direction: "ltr" }}>{children}</div>
          <div className="rv rounded-lg overflow-hidden border" style={{ height: imageHeight, borderColor: "var(--dark-hairline)" }}>
            <img src={image} alt="" className="w-full h-full object-cover" style={{ opacity: 0.5 }} loading="lazy" />
          </div>
        </>
      ) : (
        <>
          <div className="rv rounded-lg overflow-hidden border" style={{ height: imageHeight, borderColor: "var(--dark-hairline)" }}>
            <img src={image} alt="" className="w-full h-full object-cover" style={{ opacity: 0.5 }} loading="lazy" />
          </div>
          <div className="rv" style={{ direction: "ltr" }}>{children}</div>
        </>
      )}
    </div>
  );
}

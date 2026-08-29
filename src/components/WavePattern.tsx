interface WavePatternProps {
  className?: string;
  opacity?: number;
  flip?: boolean;
}

/** A soft, layered white wave pattern used as a decorative accent on
 * pages that no longer carry photography. Purely decorative (aria-hidden). */
export default function WavePattern({ className = "", opacity = 0.06, flip = false }: WavePatternProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 800 200"
      preserveAspectRatio="none"
      className={className}
      style={{ transform: flip ? "scaleY(-1)" : undefined, display: "block", width: "100%", height: "100%" }}
    >
      <path
        d="M0,120 C120,180 240,60 360,100 C480,140 600,40 720,90 C780,115 800,100 800,100 L800,200 L0,200 Z"
        fill="#ffffff"
        opacity={opacity}
      />
      <path
        d="M0,150 C130,90 250,170 380,130 C500,95 620,160 800,120 L800,200 L0,200 Z"
        fill="#ffffff"
        opacity={opacity * 0.7}
      />
      <path
        d="M0,175 C150,140 300,190 450,160 C600,130 700,180 800,160 L800,200 L0,200 Z"
        fill="#ffffff"
        opacity={opacity * 0.5}
      />
    </svg>
  );
}

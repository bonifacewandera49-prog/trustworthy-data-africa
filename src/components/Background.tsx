import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const dots: { x: number; y: number; r: number; r2: number; rot: number; vx: number; vy: number; vr: number; a: number }[] = [];

    function resize() {
      c!.width = window.innerWidth;
      c!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 10; i++) {
      const baseR = Math.random() * 10 + 5;
      dots.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        r: baseR,
        r2: baseR * (0.5 + Math.random() * 0.6),
        rot: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.12 - 0.05,
        vr: (Math.random() - 0.5) * 0.002,
        a: Math.random() * 0.05 + 0.02,
      });
    }

    let animId: number;
    function draw() {
      ctx!.clearRect(0, 0, c!.width, c!.height);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        d.rot += d.vr;
        if (d.x < -40) d.x = c!.width + 40;
        if (d.x > c!.width + 40) d.x = -40;
        if (d.y < -40) d.y = c!.height + 40;
        if (d.y > c!.height + 40) d.y = -40;
        ctx!.save();
        ctx!.translate(d.x, d.y);
        ctx!.rotate(d.rot);
        ctx!.beginPath();
        ctx!.ellipse(0, 0, d.r, d.r2, 0, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,107,53,${d.a})`;
        ctx!.filter = "blur(3px)";
        ctx!.fill();
        ctx!.restore();
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Warm dark base */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: "var(--dark-base)" }} />

      {/* Subtle grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Warm atmospheric glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute"
          style={{
            top: "-25%",
            right: "-20%",
            width: "75vw",
            height: "75vw",
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(255,107,53,.10) 0%,rgba(255,107,53,.03) 45%,transparent 75%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-15%",
            left: "-15%",
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(240,160,106,.06) 0%,rgba(240,160,106,.02) 40%,transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
    </>
  );
}

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);
  const glow3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Dot = {
      x: number; y: number; r: number; r2: number; rot: number;
      vx: number; vy: number; vr: number; a: number; baseA: number;
      pulse: number; pulseSpeed: number; hue: "orange" | "amber";
    };
    const dots: Dot[] = [];

    // Faint twinkling sparks
    type Spark = { x: number; y: number; r: number; vx: number; vy: number; a: number; twinkle: number };
    const sparks: Spark[] = [];

    function resize() {
      c!.width = window.innerWidth * dpr;
      c!.height = window.innerHeight * dpr;
      c!.style.width = window.innerWidth + "px";
      c!.style.height = window.innerHeight + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const DOT_COUNT = 22;
    for (let i = 0; i < DOT_COUNT; i++) {
      const baseR = Math.random() * 13 + 6;
      const baseA = Math.random() * 0.07 + 0.03;
      dots.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: baseR,
        r2: baseR * (0.5 + Math.random() * 0.6),
        rot: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.26 - 0.06,
        vr: (Math.random() - 0.5) * 0.004,
        a: baseA,
        baseA,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.006 + Math.random() * 0.01,
        hue: Math.random() > 0.6 ? "amber" : "orange",
      });
    }

    const SPARK_COUNT = 45;
    for (let i = 0; i < SPARK_COUNT; i++) {
      sparks.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.14 - 0.03,
        a: Math.random() * 0.25 + 0.05,
        twinkle: Math.random() * Math.PI * 2,
      });
    }

    // Mouse parallax for glow blobs
    let mx = 0.5, my = 0.5;
    let tx = 0.5, ty = 0.5;
    function onMove(e: MouseEvent) {
      tx = e.clientX / window.innerWidth;
      ty = e.clientY / window.innerHeight;
    }
    window.addEventListener("mousemove", onMove);

    let animId: number;
    function draw() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx!.clearRect(0, 0, w, h);

      // ease mouse tracking
      mx += (tx - mx) * 0.02;
      my += (ty - my) * 0.02;

      // Parallax the glow blobs
      const px1 = (mx - 0.5) * 40;
      const py1 = (my - 0.5) * 40;
      if (glow1Ref.current) glow1Ref.current.style.transform = `translate(${px1}px, ${py1}px)`;
      if (glow2Ref.current) glow2Ref.current.style.transform = `translate(${-px1 * 0.7}px, ${-py1 * 0.7}px)`;
      if (glow3Ref.current) glow3Ref.current.style.transform = `translate(${px1 * 0.4}px, ${-py1 * 0.5}px)`;

      // Twinkling sparks
      for (const s of sparks) {
        s.x += s.vx;
        s.y += s.vy;
        s.twinkle += 0.03;
        if (s.x < -10) s.x = w + 10;
        if (s.x > w + 10) s.x = -10;
        if (s.y < -10) s.y = h + 10;
        if (s.y > h + 10) s.y = -10;
        const flicker = (Math.sin(s.twinkle) + 1) / 2;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,180,120,${s.a * flicker})`;
        ctx!.fill();
      }

      // Drifting ellipse dots with breathing opacity
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        d.rot += d.vr;
        d.pulse += d.pulseSpeed;
        d.a = d.baseA * (0.55 + (Math.sin(d.pulse) + 1) / 2 * 0.9);
        if (d.x < -50) d.x = w + 50;
        if (d.x > w + 50) d.x = -50;
        if (d.y < -50) d.y = h + 50;
        if (d.y > h + 50) d.y = -50;
        ctx!.save();
        ctx!.translate(d.x, d.y);
        ctx!.rotate(d.rot);
        ctx!.beginPath();
        ctx!.ellipse(0, 0, d.r, d.r2, 0, 0, Math.PI * 2);
        ctx!.fillStyle =
          d.hue === "amber" ? `rgba(240,160,106,${d.a})` : `rgba(255,107,53,${d.a})`;
        ctx!.filter = "blur(3px)";
        ctx!.fill();
        ctx!.restore();
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Warm dark base */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: "var(--dark-base)" }} />

      {/* Subtle drifting grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-drift"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Warm atmospheric glows — breathing + mouse parallax */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          ref={glow1Ref}
          className="absolute glow-pulse-1"
          style={{
            top: "-25%",
            right: "-20%",
            width: "75vw",
            height: "75vw",
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(255,122,61,.14) 0%,rgba(255,122,61,.04) 45%,transparent 75%)",
            filter: "blur(80px)",
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          ref={glow2Ref}
          className="absolute glow-pulse-2"
          style={{
            bottom: "-15%",
            left: "-15%",
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(240,160,106,.08) 0%,rgba(240,160,106,.025) 40%,transparent 70%)",
            filter: "blur(90px)",
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          ref={glow3Ref}
          className="absolute glow-pulse-3"
          style={{
            top: "35%",
            left: "40%",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(255,144,87,.06) 0%,rgba(255,144,87,.015) 45%,transparent 75%)",
            filter: "blur(70px)",
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      <style>{`
        @keyframes glowPulse1 {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1.15; }
        }
        @keyframes glowPulse2 {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
        @keyframes glowPulse3 {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes bgDrift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 52px 52px, 52px 52px; }
        }
        .glow-pulse-1 { animation: glowPulse1 9s ease-in-out infinite; }
        .glow-pulse-2 { animation: glowPulse2 13s ease-in-out infinite; }
        .glow-pulse-3 { animation: glowPulse3 7s ease-in-out infinite; }
        .bg-drift { animation: bgDrift 60s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .glow-pulse-1, .glow-pulse-2, .glow-pulse-3, .bg-drift { animation: none; }
        }
      `}</style>
    </>
  );
}

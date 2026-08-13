import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

const NOISE_SCALE = 0.002;
const MIN_SPEED = 0.2;
const MAX_SPEED = 3.0;
const FADE_SPEED = 0.003;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  char: string;
  brightness: number;
}

interface Mouse {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
  moving: boolean;
}

interface AutoPoint {
  x: number;
  y: number;
  angle: number;
}

const noise2D = createNoise2D();

const ASCIIField = {
  canvas: null as HTMLCanvasElement | null,
  ctx: null as CanvasRenderingContext2D | null,
  particles: [] as Particle[],
  mouse: { x: -1000, y: -1000, prevX: -1000, prevY: -1000, moving: false } as Mouse,
  autoPoint: { x: 0, y: 0, angle: 0 } as AutoPoint,
  isAuto: false,
  dpr: 1,
  W: 0,
  H: 0,
  rafId: 0,
  resizeHandler: null as (() => void) | null,
  moveHandler: null as ((e: MouseEvent) => void) | null,
  leaveHandler: null as (() => void) | null,
  downHandler: null as (() => void) | null,
  upHandler: null as (() => void) | null,

  particleCount: 2800,
  emitRate: 8,
  emitRateAuto: 6,
  fontSize: 16,
  chars: [".", ";", "+", "*", "?", "#"],
  wanderSpeed: 0.008,

  init(canvasEl: HTMLCanvasElement, opts: { isAuto?: boolean } = {}) {
    this.canvas = canvasEl;
    this.ctx = this.canvas.getContext("2d")!;
    this.isAuto = opts.isAuto || false;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.autoPoint.x = window.innerWidth / 2;
    this.autoPoint.y = window.innerHeight / 2;

    this.resizeHandler = () => this.resize();
    window.addEventListener("resize", this.resizeHandler);
    this.resize();

    if (!this.isAuto) {
      this.moveHandler = (e: MouseEvent) => this.onMouseMove(e);
      this.leaveHandler = () => this.onMouseLeave();
      this.downHandler = () => this.onMouseDown();
      this.upHandler = () => this.onMouseUp();
      this.canvas.addEventListener("mousemove", this.moveHandler);
      this.canvas.addEventListener("mouseleave", this.leaveHandler);
      this.canvas.addEventListener("mousedown", this.downHandler);
      this.canvas.addEventListener("mouseup", this.upHandler);

      // Touch support
      this.canvas.addEventListener("touchmove", (e: TouchEvent) => {
        e.preventDefault();
        const t = e.touches[0];
        this.mouse.prevX = this.mouse.x;
        this.mouse.prevY = this.mouse.y;
        this.mouse.x = t.clientX;
        this.mouse.y = t.clientY;
        this.mouse.moving = true;
      }, { passive: false });
      this.canvas.addEventListener("touchstart", (e: TouchEvent) => {
        const t = e.touches[0];
        this.mouse.x = t.clientX;
        this.mouse.y = t.clientY;
        this.mouse.moving = true;
        // Burst on tap
        for (let i = 0; i < 20; i++) {
          this.spawnParticle(t.clientX, t.clientY);
        }
      }, { passive: true });
      this.canvas.addEventListener("touchend", () => {
        this.mouse.moving = false;
      }, { passive: true });
    }

    this.loop();
  },

  resize() {
    this.W = window.innerWidth;
    this.H = window.innerHeight;
    if (this.canvas) {
      this.canvas.style.width = this.W + "px";
      this.canvas.style.height = this.H + "px";
      this.canvas.width = this.W * this.dpr;
      this.canvas.height = this.H * this.dpr;
    }
    if (this.ctx) {
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    }
  },

  onMouseMove(e: MouseEvent) {
    this.mouse.prevX = this.mouse.x;
    this.mouse.prevY = this.mouse.y;
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
    this.mouse.moving = true;
  },

  onMouseLeave() {
    this.mouse.moving = false;
  },

  onMouseDown() {
    this.mouse.moving = true;
  },

  onMouseUp() {
    this.mouse.moving = false;
  },

  spawnParticle(x: number, y: number) {
    if (this.particles.length >= this.particleCount) return;
    this.particles.push({
      x: x + (Math.random() - 0.5) * 10,
      y: y + (Math.random() - 0.5) * 10,
      vx: 0,
      vy: 0,
      life: 0,
      maxLife: 0.85 + Math.random() * 0.4,
      size: 0.5 + Math.random() * 0.8,
      char: this.getCharForPos(x, y),
      brightness: 0.6 + Math.random() * 0.4,
    });
  },

  getCharForPos(x: number, y: number) {
    return this.chars[Math.floor((x + y) / this.fontSize) % this.chars.length];
  },

  update() {
    // Spawn
    if (this.isAuto) {
      this.autoPoint.angle += this.wanderSpeed;
      this.autoPoint.x =
        this.W / 2 +
        Math.sin(this.autoPoint.angle) * this.W * 0.35 +
        Math.sin(this.autoPoint.angle * 2.3) * this.W * 0.1;
      this.autoPoint.y =
        this.H / 2 +
        Math.cos(this.autoPoint.angle * 1.7) * this.H * 0.35 +
        Math.cos(this.autoPoint.angle * 0.8) * this.H * 0.1;
      for (let i = 0; i < this.emitRateAuto; i++) {
        this.spawnParticle(this.autoPoint.x, this.autoPoint.y);
      }
    } else if (this.mouse.moving) {
      for (let i = 0; i < this.emitRate; i++) {
        this.spawnParticle(this.mouse.x, this.mouse.y);
      }
    }
    this.mouse.moving = false;

    // Cull
    this.particles = this.particles.filter(
      (p) => p.life > 0 && p.life <= p.maxLife
    );

    // Integrate
    for (const p of this.particles) {
      const angle = noise2D(p.x * NOISE_SCALE, p.y * NOISE_SCALE) * Math.PI * 2;
      p.vx += Math.cos(angle) * 0.15;
      p.vy += Math.sin(angle) * 0.15;
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > MAX_SPEED) {
        p.vx = (p.vx / speed) * MAX_SPEED;
        p.vy = (p.vy / speed) * MAX_SPEED;
      }
      if (speed < MIN_SPEED && speed > 0) {
        p.vx = (p.vx / speed) * MIN_SPEED;
        p.vy = (p.vy / speed) * MIN_SPEED;
      }
      p.x += p.vx;
      p.y += p.vy;
      p.life += FADE_SPEED;
      if (p.x < -50 || p.x > this.W + 50 || p.y < -50 || p.y > this.H + 50) {
        p.life = 2;
      }
    }
  },

  draw() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.W, this.H);
    this.ctx.textBaseline = "middle";
    this.ctx.textAlign = "center";

    for (const p of this.particles) {
      const lifeRatio = p.life / p.maxLife;
      const alpha =
        lifeRatio > 0.8
          ? ((1 - lifeRatio) / 0.2) * p.brightness
          : p.brightness;
      const size = p.size * (1 - lifeRatio * 0.6);
      const r = 245,
        g = 245,
        b = 240;

      this.ctx.font = `${size * this.fontSize}px "JetBrains Mono", monospace`;
      this.ctx.fillStyle = `rgba(${r},${g},${b},${Math.max(0, alpha)})`;
      this.ctx.fillText(p.char, p.x, p.y);
    }
  },

  loop() {
    this.update();
    this.draw();
    this.rafId = requestAnimationFrame(() => this.loop());
  },

  destroy() {
    cancelAnimationFrame(this.rafId);
    if (this.resizeHandler) {
      window.removeEventListener("resize", this.resizeHandler);
    }
    if (this.canvas) {
      if (this.moveHandler) this.canvas.removeEventListener("mousemove", this.moveHandler);
      if (this.leaveHandler) this.canvas.removeEventListener("mouseleave", this.leaveHandler);
      if (this.downHandler) this.canvas.removeEventListener("mousedown", this.downHandler);
      if (this.upHandler) this.canvas.removeEventListener("mouseup", this.upHandler);
    }
  },
};

interface FluidFieldProps {
  isInteractive?: boolean;
}

export default function FluidField({ isInteractive = false }: FluidFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    ASCIIField.init(canvas, { isAuto: !isInteractive });

    const handleVisibility = () => {
      if (document.hidden) {
        ASCIIField.destroy();
      } else {
        ASCIIField.init(canvas, { isAuto: !isInteractive });
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      ASCIIField.destroy();
    };
  }, [isInteractive]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: isInteractive ? "auto" : "none",
      }}
    >
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Animated ASCII fluid field background"
        style={{
          position: "absolute",
          inset: 0,
          touchAction: isInteractive ? "none" : "auto",
        }}
      />
    </div>
  );
}

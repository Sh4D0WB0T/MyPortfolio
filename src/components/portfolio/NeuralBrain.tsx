import { useEffect, useRef } from "react";

/**
 * Canvas-based neural brain: thousands of particles forming a rotating sphere
 * with reactive connections. Lightweight (no three.js).
 */
export function NeuralBrain() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: 0, y: 0, active: false };
    let rotation = 0;
    let raf = 0;

    const PARTICLE_COUNT = 320;
    type P = { x: number; y: number; z: number; r: number };
    const particles: P[] = [];
    // Distribute on a sphere via golden spiral
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / PARTICLE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      particles.push({
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
        r: 0.8 + Math.random() * 1.6,
      });
    }

    const resize = () => {
      const parent = canvas.parentElement!;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left - w / 2) / (w / 2);
      mouse.y = (e.clientY - rect.top - h / 2) / (h / 2);
      mouse.active = true;
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      rotation += 0.0015;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.36;

      // Rotate around y axis + slight tilt influenced by mouse
      const ty = mouse.active ? mouse.y * 0.4 : 0;
      const tx = mouse.active ? mouse.x * 0.6 : 0;
      const cosY = Math.cos(rotation + tx);
      const sinY = Math.sin(rotation + tx);
      const cosX = Math.cos(ty);
      const sinX = Math.sin(ty);

      const projected = particles.map((p) => {
        // rotate Y
        let x = p.x * cosY - p.z * sinY;
        let z = p.x * sinY + p.z * cosY;
        let y = p.y;
        // rotate X
        const y2 = y * cosX - z * sinX;
        z = y * sinX + z * cosX;
        y = y2;
        const perspective = 1.6 / (1.6 - z);
        return {
          x: cx + x * radius * perspective,
          y: cy + y * radius * perspective,
          z,
          r: p.r * perspective,
        };
      });

      // Connections (only nearby + front-facing)
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 5200) {
            const alpha = (1 - d2 / 5200) * 0.35 * ((a.z + b.z) / 2 + 0.6);
            if (alpha <= 0) continue;
            const hue = 200 + (a.z + 1) * 60; // blue → violet
            ctx.strokeStyle = `hsla(${hue}, 95%, 70%, ${alpha})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const p of projected) {
        const depth = (p.z + 1) / 2;
        const hue = 200 + depth * 90;
        ctx.fillStyle = `hsla(${hue}, 100%, ${60 + depth * 20}%, ${0.4 + depth * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}
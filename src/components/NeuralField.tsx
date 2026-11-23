"use client";

import { useEffect, useRef } from "react";
import styles from "./neural-field.module.css";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  accent: boolean;
};

type Signal = {
  from: number;
  to: number;
  t: number;
  speed: number;
};

export function NeuralField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const ctx = canvasEl!.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let signals: Signal[] = [];
    let frame = 0;
    let animationId = 0;
    let pointer = { x: -999, y: -999 };

    function makeNode(): Node {
      return {
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.00012,
        vy: (Math.random() - 0.5) * 0.00012,
        radius: 0.9 + Math.random() * 1.9,
        phase: Math.random() * Math.PI * 2,
        accent: Math.random() > 0.86,
      };
    }

    function makeSignal(): Signal {
      return {
        from: Math.floor(Math.random() * nodes.length),
        to: Math.floor(Math.random() * nodes.length),
        t: Math.random(),
        speed: 0.0015 + Math.random() * 0.0025,
      };
    }

    function resize() {
      const rect = canvasEl!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvasEl!.width = Math.floor(width * dpr);
      canvasEl!.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(24, Math.min(48, Math.round((width * height) / 11000)));
      if (nodes.length !== count) {
        nodes = Array.from({ length: count }, makeNode);
        signals = Array.from({ length: 8 }, makeSignal);
      }

      if (reduced) draw(0);
    }

    function draw(time: number) {
      if (!width || !height) return;
      ctx!.clearRect(0, 0, width, height);

      const px = (node: Node) => node.x * width;
      const py = (node: Node) => node.y * height;

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = px(a) - px(b);
          const dy = py(a) - py(b);
          const distance = Math.hypot(dx, dy);
          const max = Math.min(150, width * 0.28);

          if (distance < max) {
            const alpha = (1 - distance / max) * 0.22;
            ctx!.beginPath();
            ctx!.moveTo(px(a), py(a));
            ctx!.lineTo(px(b), py(b));
            ctx!.strokeStyle = `rgba(201, 246, 91, ${alpha})`;
            ctx!.lineWidth = 0.65;
            ctx!.stroke();
          }
        }
      }

      for (const signal of signals) {
        const a = nodes[signal.from];
        const b = nodes[signal.to];
        if (!a || !b) continue;

        signal.t += signal.speed;
        if (signal.t > 1) {
          signal.t = 0;
          signal.from = Math.floor(Math.random() * nodes.length);
          signal.to = Math.floor(Math.random() * nodes.length);
        }

        const sx = px(a) + (px(b) - px(a)) * signal.t;
        const sy = py(a) + (py(b) - py(a)) * signal.t;
        const glow = ctx!.createRadialGradient(sx, sy, 0, sx, sy, 7);
        glow.addColorStop(0, "rgba(201, 246, 91, 0.9)");
        glow.addColorStop(1, "rgba(201, 246, 91, 0)");
        ctx!.fillStyle = glow;
        ctx!.beginPath();
        ctx!.arc(sx, sy, 7, 0, Math.PI * 2);
        ctx!.fill();
      }

      const pointerX = pointer.x * width;
      const pointerY = pointer.y * height;

      for (const node of nodes) {
        const pulse = 0.65 + Math.sin(time * 0.0012 + node.phase) * 0.35;
        const x = px(node);
        const y = py(node);
        const dx = x - pointerX;
        const dy = y - pointerY;
        const distance = Math.hypot(dx, dy);

        if (distance < 100 && distance > 0) {
          const force = (100 - distance) / 100;
          node.vx += (dx / distance) * force * 0.000008;
          node.vy += (dy / distance) * force * 0.000008;
        }

        ctx!.beginPath();
        ctx!.arc(x, y, node.radius + pulse * 0.8, 0, Math.PI * 2);
        ctx!.fillStyle = node.accent
          ? `rgba(255, 101, 66, ${0.55 + pulse * 0.35})`
          : `rgba(233, 245, 207, ${0.45 + pulse * 0.45})`;
        ctx!.fill();

        if (node.accent) {
          ctx!.beginPath();
          ctx!.arc(x, y, node.radius * 4.5, 0, Math.PI * 2);
          ctx!.strokeStyle = "rgba(255, 101, 66, 0.15)";
          ctx!.lineWidth = 0.7;
          ctx!.stroke();
        }
      }
    }

    function tick(time: number) {
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.vx *= 0.999;
        node.vy *= 0.999;

        if (node.x < 0.03 || node.x > 0.97) node.vx *= -1;
        if (node.y < 0.03 || node.y > 0.97) node.vy *= -1;
        node.x = Math.max(0.03, Math.min(0.97, node.x));
        node.y = Math.max(0.03, Math.min(0.97, node.y));
      }

      draw(time);
      frame += 1;
      if (frame % 2 === 0) {
        animationId = requestAnimationFrame(tick);
      } else {
        animationId = requestAnimationFrame(tick);
      }
    }

    function onPointerMove(event: PointerEvent) {
      const rect = canvasEl!.getBoundingClientRect();
      pointer = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
    }

    function onPointerLeave() {
      pointer = { x: -999, y: -999 };
    }

    const observer = new ResizeObserver(resize);
    observer.observe(canvasEl!);
    resize();

    if (!reduced) {
      animationId = requestAnimationFrame(tick);
      canvasEl!.addEventListener("pointermove", onPointerMove);
      canvasEl!.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      canvasEl!.removeEventListener("pointermove", onPointerMove);
      canvasEl!.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div className={styles.frame}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.topbar}>
        <span>Fig. 01 — Neural field</span>
        <span className={styles.live}>
          <i />
          Live
        </span>
      </div>
      <div className={styles.labels} aria-hidden="true">
        <span className={styles.labelA}>self-model</span>
        <span className={styles.labelB}>prediction</span>
        <span className={styles.labelC}>memory</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.legend}>
          <span>
            <i className={styles.dotLime} /> Excitatory
          </span>
          <span>
            <i className={styles.dotCoral} /> Salience
          </span>
        </div>
        <span className={styles.coords}>40.7128° N / 74.0060° W</span>
      </div>
      <div className={styles.corner} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  px: number; // projected x
  py: number; // projected y
}

export default function Canvas3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Grid of points in 3D space
    const points: Point3D[] = [];
    const count = 55;
    const size = 500; // bounds of 3D box

    for (let i = 0; i < count; i++) {
      points.push({
        x: (Math.random() - 0.5) * size,
        y: (Math.random() - 0.5) * size,
        z: (Math.random() - 0.5) * size,
        px: 0,
        py: 0,
      });
    }

    let rx = 0.0008; // default rotation X
    let ry = 0.0012; // default rotation Y
    const fov = 400; // focal length

    let mouseX = 0;
    let mouseY = 0;
    let targetRX = 0.0008;
    let targetRY = 0.0012;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - width / 2) / (width / 2);
      mouseY = (e.clientY - height / 2) / (height / 2);
      targetRX = mouseY * 0.004;
      targetRY = mouseX * 0.004;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Interpolate rotation speed towards target based on mouse coordinates
      rx += (targetRX - rx) * 0.05;
      ry += (targetRY - ry) * 0.05;

      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);

      // Transform & Project 3D points
      points.forEach((p) => {
        // Rotate X
        let y1 = p.y * cosX - p.z * sinX;
        let z1 = p.z * cosX + p.y * sinX;

        // Rotate Y
        let x2 = p.x * cosY - z1 * sinY;
        let z2 = z1 * cosY + p.x * sinY;

        p.x = x2;
        p.y = y1;
        p.z = z2;

        const depth = z2 + 800; // offset depth to keep particles in front of camera
        const scale = fov / depth;
        p.px = width / 2 + x2 * scale;
        p.py = height / 2 + y1 * scale;
      });

      // Render lines between nearby particles
      ctx.strokeStyle = "rgba(229, 9, 20, 0.05)"; // very subtle crimson line
      ctx.lineWidth = 0.8;

      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Render particle points
      points.forEach((p) => {
        const depth = p.z + 800;
        const radius = Math.max(0.6, (fov / depth) * 1.2);
        ctx.fillStyle = "rgba(229, 9, 20, 0.20)"; // subtle red dot glow
        ctx.beginPath();
        ctx.arc(p.px, p.py, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60"
      aria-hidden="true"
    />
  );
}

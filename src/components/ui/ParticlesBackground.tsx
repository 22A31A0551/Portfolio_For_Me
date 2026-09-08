import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let particles: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const isMobile = canvas.width < 768;
      // High-performance particle counts: 18 on mobile, 30 on desktop
      const count = isMobile ? 18 : 30;

      for (let i = 0; i < count; i++) {
        const z = Math.random() * 1.8 + 0.6;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: z,
          size: z * 1.6,
          speedX: (Math.random() - 0.5) * 0.2 * z,
          speedY: (Math.random() - 0.5) * 0.2 * z,
          opacity: Math.min(0.7, z * 0.3),
        });
      }
    };

    const connectionDistance = 110;
    const connectionDistSq = connectionDistance * connectionDistance;

    const drawParticles = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(drawParticles);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pCount = particles.length;

      // Update particle positions
      for (let i = 0; i < pCount; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < -15) p.x = canvas.width + 15;
        else if (p.x > canvas.width + 15) p.x = -15;
        if (p.y < -15) p.y = canvas.height + 15;
        else if (p.y > canvas.height + 15) p.y = -15;
      }

      // Draw connections with squared-distance pre-check (O(N^2), zero Math.sqrt)
      for (let i = 0; i < pCount; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < pCount; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDistSq) {
            const distRatio = 1 - distSq / connectionDistSq;
            const opacity = distRatio * 0.16 * Math.min(p1.opacity, p2.opacity);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(147, 197, 253, ${opacity})`; // Subtle electric blue/white
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw node spheres with glowing halos
      for (let i = 0; i < pCount; i++) {
        const p = particles[i];

        // Soft halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${p.opacity * 0.18})`;
        ctx.fill();

        // Solid core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.8})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 will-change-transform"
    />
  );
};

export { ParticlesBackground };


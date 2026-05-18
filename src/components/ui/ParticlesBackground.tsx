import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      z: number;      // Depth parameter (0.5 to 2.5) for 3D parallax depth
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
      // Optimum node count for constellation mesh density
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 28000), 45);
      
      for (let i = 0; i < count; i++) {
        const z = Math.random() * 2 + 0.5; // Z depth for 3D parallax
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: z,
          size: z * 2.2, // Larger sizes for foreground nodes
          speedX: (Math.random() - 0.5) * 0.22 * z, // Foreground nodes move faster
          speedY: (Math.random() - 0.5) * 0.22 * z,
          opacity: Math.min(0.85, z * 0.35), // Foreground nodes are more opaque
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particle positions and wrap around borders
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;
      });

      const connectionDistance = 120;

      // 1. Draw triangular mesh polygons (trio connections as seen in reference image)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist12 = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist12 > connectionDistance) continue;

          for (let k = j + 1; k < particles.length; k++) {
            const p3 = particles[k];
            const dist23 = Math.hypot(p2.x - p3.x, p2.y - p3.y);
            const dist31 = Math.hypot(p3.x - p1.x, p3.y - p1.y);

            if (dist23 < connectionDistance && dist31 < connectionDistance) {
              // Calculate opacity based on average distance of all three links
              const avgDist = (dist12 + dist23 + dist31) / 3;
              const opacity = (1 - avgDist / connectionDistance) * 0.04; // Soft 4% mesh fill opacity
              
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.lineTo(p3.x, p3.y);
              ctx.closePath();
              // Glowing white translucent polygonal mesh
              ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
              ctx.fill();
            }
          }
        }
      }

      // 2. Draw dual-line connections (network links)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.18 * Math.min(p1.opacity, p2.opacity);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // 3. Draw nodes (glowing white spheres)
      particles.forEach((p) => {
        // Soft glowing border halo around the nodes
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.15})`;
        ctx.fill();

        // Core solid white node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-45"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export { ParticlesBackground };

import { useEffect, useRef } from "react";

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for interactive network node links
    const mouse = {
      x: null,
      y: null,
      radius: 240,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Node particle class with vibrant tech colors
    class NodeParticle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.radius = Math.random() * 2.5 + 1.5;
        
        // High-contrast Cyan, Teal, Electric Blue palette
        const colors = [
          "rgba(0, 242, 254, ",   // Electric Cyan
          "rgba(45, 212, 191, ",  // Bright Teal
          "rgba(59, 130, 246, ",  // Electric Blue
        ];
        this.colorStr = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.4;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off bounds smoothly
        if (this.x <= 0 || this.x >= width) this.vx *= -1;
        if (this.y <= 0 || this.y >= height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorStr}${this.alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `${this.colorStr}0.9)`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    // Generate ~110 network nodes
    const count = Math.min(Math.floor((width * height) / 10000), 120);
    const particles = Array.from({ length: Math.max(60, count) }, () => new NodeParticle());

    // Main animation loop
    const render = () => {
      // Clear background with deep dark space tone
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, width, height);

      // Render Cyber Grid Lines
      ctx.strokeStyle = "rgba(45, 212, 191, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 56;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw & Update Particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Connect Node Lines
      const maxDist = 160;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.45;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(45, 212, 191, ${opacity})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      // Connect Mouse Links
      if (mouse.x !== null && mouse.y !== null) {
        particles.forEach((p) => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const opacity = (1 - dist / mouse.radius) * 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${opacity})`;
            ctx.lineWidth = 1.6;
            ctx.stroke();

            // Glowing cursor node point
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 1.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 242, 254, ${opacity})`;
            ctx.fill();
          }
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030712]">
      {/* HTML5 Canvas */}
      <canvas ref={canvasRef} className="block w-full h-full" />

      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-teal-500/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[650px] h-[650px] rounded-full bg-blue-500/15 blur-[180px] pointer-events-none" />
    </div>
  );
};

export default InteractiveBackground;

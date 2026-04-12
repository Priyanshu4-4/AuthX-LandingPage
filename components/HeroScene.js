"use client";
import { useEffect, useRef } from "react";

export default function HeroScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let mouse = { x: W / 2, y: H / 2 };

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    const onMouse = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);

    // Nodes representing blockchain wallets
    const NODE_COUNT = 55;
    const nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2.5 + 1,
      pulse: Math.random() * Math.PI * 2,
      speed: 0.015 + Math.random() * 0.02,
      type: Math.random() > 0.85 ? "hub" : "node", // hubs are bigger
    }));

    // Animate data packets along edges
    const packets = [];
    function spawnPacket(from, to) {
      packets.push({ from, to, t: 0, speed: 0.008 + Math.random() * 0.006 });
    }
    setInterval(() => {
      if (packets.length < 12) {
        const a = Math.floor(Math.random() * nodes.length);
        const b = Math.floor(Math.random() * nodes.length);
        if (a !== b) spawnPacket(a, b);
      }
    }, 600);

    let raf;
    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Subtle radial glow from mouse
      const grd = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 350);
      grd.addColorStop(0, "rgba(0,180,216,0.06)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      // Move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.speed;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // Draw edges between nearby nodes
      const CONNECT_DIST = 160;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,180,216,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.t += p.speed;
        if (p.t >= 1) { packets.splice(i, 1); continue; }
        const from = nodes[p.from], to = nodes[p.to];
        const px = from.x + (to.x - from.x) * p.t;
        const py = from.y + (to.y - from.y) * p.t;
        const glow = ctx.createRadialGradient(px, py, 0, px, py, 6);
        glow.addColorStop(0, "rgba(0,212,255,0.9)");
        glow.addColorStop(1, "rgba(0,212,255,0)");
        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw nodes
      nodes.forEach((n) => {
        const pulse = 0.5 + 0.5 * Math.sin(n.pulse);
        const isHub = n.type === "hub";
        const r = isHub ? n.r * 2.5 : n.r;

        // Outer glow
        if (isHub) {
          const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
          g.addColorStop(0, `rgba(0,180,216,${0.3 * pulse})`);
          g.addColorStop(1, "rgba(0,180,216,0)");
          ctx.beginPath();
          ctx.fillStyle = g;
          ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isHub
          ? `rgba(0,212,255,${0.7 + 0.3 * pulse})`
          : `rgba(0,180,216,${0.4 + 0.3 * pulse})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <section className="hero-section" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Live on Ethereum Sepolia
        </div>

        <h1 className="hero-title">
          <span className="title-line">Web3 Banking</span>
          <span className="title-line accent">Without Barriers.</span>
        </h1>

        <p className="hero-sub">
          AuthX is a decentralized banking app with a built-in self-custody wallet.
          No MetaMask. No extensions. Just your keys, your ETH, your control.
        </p>

        <div className="hero-ctas">
          <a href="https://authx-rho.vercel.app" target="_blank" rel="noreferrer" className="btn-primary btn-large">
            Launch App →
          </a>
          <a href="#how-it-works" className="btn-ghost btn-large">
            See How It Works
          </a>
        </div>

        <div className="hero-stats">
          {[
            { value: "AES-256", label: "Encryption" },
            { value: "BIP39", label: "Mnemonic Standard" },
            { value: "0 Extensions", label: "Required" },
            { value: "Sepolia", label: "Testnet Live" },
          ].map((s) => (
            <div key={s.label} className="stat-pill">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";

export default function BusinessScene() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              el.style.transitionDelay = `${i * 80}ms`;
              el.classList.add("revealed");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stack = [
    { emoji: "⚛️", name: "React 18", role: "Frontend" },
    { emoji: "▲", name: "Next.js", role: "Framework" },
    { emoji: "🎨", name: "Tailwind CSS", role: "Styling" },
    { emoji: "🔗", name: "ethers.js v6", role: "Blockchain SDK" },
    { emoji: "📋", name: "Solidity ^0.8", role: "Smart Contract" },
    { emoji: "🔐", name: "Web Crypto API", role: "AES-256-GCM" },
    { emoji: "📱", name: "qrcode.react", role: "QR Display" },
    { emoji: "📷", name: "html5-qrcode", role: "QR Scanner" },
    { emoji: "🌐", name: "Sepolia Testnet", role: "Network" },
    { emoji: "🚀", name: "Vercel", role: "Deployment" },
  ];

  const audiences = [
    { emoji: "👩‍💻", title: "Web3 Developers", desc: "A real deployed dApp to reference, fork, or build on." },
    { emoji: "🏆", title: "Hackathon Teams", desc: "Full-stack Ethereum app — smart contract, wallet, UI." },
    { emoji: "🔰", title: "Crypto Beginners", desc: "Get started without MetaMask — wallet built right in." },
    { emoji: "🧪", title: "Sepolia Testers", desc: "Experiment with ETH transactions — no real money." },
  ];

  return (
    <section ref={sectionRef} className="section-dark" id="tech-stack">
      <div className="section-inner">
        <div className="reveal section-eyebrow">Tech Stack</div>
        <h2 className="reveal section-title">
          Built with the<br />
          <span className="accent">best tools in Web3.</span>
        </h2>

        {/* Tech grid */}
        <div className="tech-grid">
          {stack.map((s, i) => (
            <div key={i} className="reveal tech-item">
              <span className="tech-emoji">{s.emoji}</span>
              <span className="tech-name">{s.name}</span>
              <span className="tech-role">{s.role}</span>
            </div>
          ))}
        </div>

        <div className="section-divider" />

        {/* Audiences */}
        <div className="reveal section-eyebrow" style={{ marginTop: "4rem" }}>Who Is It For?</div>
        <div className="audience-grid">
          {audiences.map((a, i) => (
            <div key={i} className="reveal audience-card">
              <div className="audience-emoji">{a.emoji}</div>
              <h3 className="audience-title">{a.title}</h3>
              <p className="audience-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

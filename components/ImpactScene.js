"use client";
import { useEffect, useRef } from "react";

export default function ImpactScene() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              el.style.transitionDelay = `${i * 120}ms`;
              el.classList.add("revealed");
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: "🔌",
      title: "Wallet Extensions Required",
      body: "Every Web3 app forces users to install MetaMask first. That's a massive adoption barrier for beginners.",
      stat: "80%",
      statLabel: "of newcomers drop off at wallet setup",
    },
    {
      icon: "😰",
      title: "Intimidating UX",
      body: "Seed phrases, gas fees, RPC configs — crypto is cryptic. Most users never get past the setup screen.",
      stat: "3x",
      statLabel: "higher abandonment vs traditional apps",
    },
    {
      icon: "🔗",
      title: "Fragmented Tools",
      body: "Your wallet lives in one extension, your dApp in another tab, your tx history on Etherscan. Nothing is unified.",
      stat: "4+",
      statLabel: "separate tools needed for one transaction",
    },
  ];

  return (
    <section ref={sectionRef} className="section-dark" id="problem">
      <div className="section-inner">
        <div className="reveal section-eyebrow">The Problem</div>
        <h2 className="reveal section-title">
          Web3 is powerful.<br />
          <span className="accent">Getting started shouldn't be painful.</span>
        </h2>
        <p className="reveal section-sub">
          The barriers to Web3 adoption aren't technical — they're UX. AuthX removes every one of them.
        </p>

        <div className="problems-grid">
          {problems.map((p, i) => (
            <div key={i} className="reveal problem-card">
              <div className="problem-icon">{p.icon}</div>
              <h3 className="problem-title">{p.title}</h3>
              <p className="problem-body">{p.body}</p>
              <div className="problem-stat">
                <span className="stat-big">{p.stat}</span>
                <span className="stat-desc">{p.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal solution-callout">
          <div className="callout-icon">⚡</div>
          <div>
            <strong>AuthX solves this</strong> by being a complete wallet + banking interface in one — no extensions, no friction, no MetaMask.
          </div>
        </div>
      </div>
    </section>
  );
}

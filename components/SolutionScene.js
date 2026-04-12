"use client";
import { useEffect, useRef } from "react";

export default function SolutionScene() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              el.style.transitionDelay = `${i * 100}ms`;
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

  const contractInfo = [
    { label: "Contract", value: "Bank.sol" },
    { label: "Network", value: "Ethereum Sepolia" },
    { label: "Language", value: "Solidity ^0.8.x" },
    { label: "IDE", value: "Remix IDE" },
  ];

  const functions = ["deposit()", "transfer(address, uint256)", "getBalance()", "balances(address)"];
  const events = ["Deposit(address indexed user, uint256 amount)", "Transfer(address indexed from, address indexed to, uint256 amount)"];

  const archLayers = [
    { label: "User (Browser)", sub: "Any device · No extensions", color: "var(--blue)" },
    { label: "AuthX Wallet  ·  MetaMask", sub: "Self-custody OR extension", color: "var(--card)" },
    { label: "ethers.js v6", sub: "Blockchain interaction layer", color: "var(--bg-mid)" },
    { label: "Sepolia RPC", sub: "publicnode · drpc", color: "var(--bg-mid)" },
    { label: "Bank.sol · 0xFE7556...cFEe", sub: "Ethereum Sepolia Testnet", color: "var(--blue)" },
  ];

  return (
    <section ref={sectionRef} className="section-mid" id="security">
      <div className="section-inner">
        <div className="reveal section-eyebrow">Smart Contract</div>
        <h2 className="reveal section-title">
          Open. Verifiable.<br />
          <span className="accent">Trustless by design.</span>
        </h2>

        <div className="solution-grid">
          {/* Contract Card */}
          <div className="reveal contract-card">
            <div className="contract-header">
              <span className="contract-badge">📋 Bank.sol</span>
              <a
                href="https://sepolia.etherscan.io/address/0xFE7556259B388E6F82C9a4c63AA3751a4f6AcFEe"
                target="_blank"
                rel="noreferrer"
                className="etherscan-link"
              >
                View on Etherscan ↗
              </a>
            </div>
            <div className="contract-address">
              <span className="addr-label">Contract Address</span>
              <code className="addr-value">0xFE7556259B388E6F82C9a4c63AA3751a4f6AcFEe</code>
            </div>
            <div className="contract-meta">
              {contractInfo.map((c) => (
                <div key={c.label} className="meta-row">
                  <span className="meta-key">{c.label}</span>
                  <span className="meta-val">{c.value}</span>
                </div>
              ))}
            </div>
            <div className="contract-section-title">Functions</div>
            <div className="code-list">
              {functions.map((f) => (
                <div key={f} className="code-item">
                  <span className="code-dot" />
                  <code>{f}</code>
                </div>
              ))}
            </div>
            <div className="contract-section-title">Events</div>
            <div className="code-list">
              {events.map((e) => (
                <div key={e} className="code-item code-item-event">
                  <span className="code-dot event-dot" />
                  <code>{e}</code>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="reveal arch-card">
            <div className="arch-title">System Architecture</div>
            <div className="arch-layers">
              {archLayers.map((layer, i) => (
                <div key={i} className="arch-layer-wrap">
                  <div className="arch-layer" style={{ background: layer.color }}>
                    <span className="arch-layer-label">{layer.label}</span>
                    <span className="arch-layer-sub">{layer.sub}</span>
                  </div>
                  {i < archLayers.length - 1 && (
                    <div className="arch-arrow">↓</div>
                  )}
                </div>
              ))}
            </div>

            {/* Security callout */}
            <div className="security-box">
              <div className="security-title">🔐 Security Model</div>
              <ul className="security-list">
                <li>AES-256-GCM encrypted private keys</li>
                <li>PBKDF2 — 200,000 iterations</li>
                <li>Keys stored only in localStorage</li>
                <li>Full self-custody — no custodian</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

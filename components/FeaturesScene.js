"use client";
import { useEffect, useRef } from "react";

export default function FeaturesScene() {
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

  const walletFeatures = [
    { icon: "🔑", title: "BIP39 Mnemonic", desc: "Generate a 12-word seed phrase and own your keys from day one." },
    { icon: "📥", title: "Import Any Wallet", desc: "Restore via seed phrase or private key — full compatibility." },
    { icon: "🔐", title: "AES-256-GCM", desc: "Military-grade encryption with PBKDF2 (200,000 iterations)." },
    { icon: "💾", title: "Keystore Backup", desc: "Download encrypted JSON backup anytime, anywhere." },
    { icon: "🦊", title: "MetaMask Friendly", desc: "MetaMask still works as an alternative — your choice." },
    { icon: "🔒", title: "Lock & Forget", desc: "Full session controls — lock your wallet with one click." },
  ];

  const bankingFeatures = [
    { icon: "📤", title: "Deposit ETH", desc: "Deposit ETH directly into the Bank.sol smart contract." },
    { icon: "↔️", title: "Contract Transfers", desc: "Transfer via internal smart contract balances — fast and gas-efficient." },
    { icon: "📡", title: "Direct Transfers", desc: "Raw wallet-to-wallet ETH sends — no contract involved." },
    { icon: "📷", title: "QR Code System", desc: "Display and scan wallet QR codes to autofill recipient addresses." },
    { icon: "🔍", title: "Wallet Discovery", desc: "Scan on-chain events to find and interact with all AuthX wallets." },
    { icon: "⚡", title: "Live Notifications", desc: "Real-time event listeners — instant toasts on every transaction." },
  ];

  return (
    <section ref={sectionRef} className="section-mid" id="features">
      <div className="section-inner">
        <div className="reveal section-eyebrow">Features</div>
        <h2 className="reveal section-title">
          Everything you need.<br />
          <span className="accent">Nothing you don't.</span>
        </h2>

        {/* Wallet Features */}
        <div className="reveal features-block-header">
          <div className="block-tag">🔐 Self-Custody Wallet</div>
          <p>No MetaMask required. Generate or import a wallet right inside AuthX.</p>
        </div>
        <div className="features-grid">
          {walletFeatures.map((f, i) => (
            <div key={i} className="reveal feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="features-divider" />

        {/* Banking Features */}
        <div className="reveal features-block-header">
          <div className="block-tag">🏦 Banking Interface</div>
          <p>Deposit, transfer, discover — all powered by Bank.sol on Sepolia.</p>
        </div>
        <div className="features-grid">
          {bankingFeatures.map((f, i) => (
            <div key={i} className="reveal feature-card feature-card-alt">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

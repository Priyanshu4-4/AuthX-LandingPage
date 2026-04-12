"use client";
import { useEffect, useRef, useState } from "react";

export default function WorkflowScene() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Create Your Wallet",
      desc: "Open AuthX in your browser. Click 'Create Wallet' — a 12-word BIP39 mnemonic is generated instantly. Write it down. It's yours forever.",
      detail: "Your private key never leaves your device. It's encrypted with AES-256-GCM before being stored in localStorage.",
      icon: "🔑",
    },
    {
      num: "02",
      title: "Connect to Sepolia",
      desc: "AuthX connects directly to the Ethereum Sepolia testnet via a public RPC. No manual config. No MetaMask popup.",
      detail: "Uses ethers.js v6 under the hood. Supports publicnode and drpc as RPC endpoints.",
      icon: "🌐",
    },
    {
      num: "03",
      title: "Deposit ETH",
      desc: "Send Sepolia ETH to the Bank.sol smart contract. Your balance is tracked on-chain and visible instantly.",
      detail: "Bank.sol at 0xFE7556...cFEe stores balances per address using a mapping(address → uint256).",
      icon: "📤",
    },
    {
      num: "04",
      title: "Transfer Funds",
      desc: "Send ETH to any wallet — via contract or direct raw transfer. Scan a QR code or paste an address.",
      detail: "Deposit and Transfer events fire immediately. All connected clients see the update in real time.",
      icon: "↔️",
    },
    {
      num: "05",
      title: "Discover the Network",
      desc: "AuthX scans all on-chain events to discover every wallet that's ever interacted with the contract.",
      detail: "Each wallet shows balance, deposit count, transfer count, and auto-labels like 'Top Depositor'.",
      icon: "🔍",
    },
  ];

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

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => setActiveStep((s) => (s + 1) % steps.length), 3500);
    return () => clearInterval(t);
  }, [steps.length]);

  return (
    <section ref={sectionRef} className="section-dark" id="how-it-works">
      <div className="section-inner">
        <div className="reveal section-eyebrow">How It Works</div>
        <h2 className="reveal section-title">
          From zero to Web3<br />
          <span className="accent">in five steps.</span>
        </h2>

        <div className="workflow-layout">
          {/* Step selector */}
          <div className="workflow-steps">
            {steps.map((s, i) => (
              <button
                key={i}
                className={`workflow-step ${activeStep === i ? "active" : ""}`}
                onClick={() => setActiveStep(i)}
              >
                <span className="step-num">{s.num}</span>
                <span className="step-label">{s.title}</span>
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <div className="workflow-detail">
            <div className="detail-icon">{steps[activeStep].icon}</div>
            <div className="detail-num">{steps[activeStep].num}</div>
            <h3 className="detail-title">{steps[activeStep].title}</h3>
            <p className="detail-desc">{steps[activeStep].desc}</p>
            <div className="detail-technical">
              <span className="tech-label">Technical detail</span>
              <p>{steps[activeStep].detail}</p>
            </div>
            {/* Progress bar */}
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

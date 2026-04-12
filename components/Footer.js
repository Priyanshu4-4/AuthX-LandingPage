import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-mark">
              <Image src="/logo.png" width={36} height={36} alt="AuthX" />
            </div>
            <div>
              <div className="logo-text">AuthX</div>
              <div className="footer-tagline">Decentralized. Accessible. Trustless.</div>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Product</div>
              <a href="https://authx-rho.vercel.app" target="_blank" rel="noreferrer">Live App</a>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#security">Security</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Contract</div>
              <a href="https://sepolia.etherscan.io/address/0xFE7556259B388E6F82C9a4c63AA3751a4f6AcFEe" target="_blank" rel="noreferrer">Etherscan ↗</a>
              <a href="#tech-stack">Tech Stack</a>
              <a href="https://github.com/Priyanshu4-4/AuthX-LandingPage" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 AuthX. Built on Ethereum Sepolia.</span>
          <span className="footer-contract">
            Bank.sol · <code>0xFE7556...cFEe</code>
          </span>
        </div>
      </div>
    </footer>
  );
}

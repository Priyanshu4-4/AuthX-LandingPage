"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 120);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const links = ["Features", "How It Works", "Security", "Tech Stack"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "navbar-scrolled" : "navbar-top"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="logo-mark">
            <Image src="/logo.png" width={36} height={36} alt="AuthX" />
          </div>
          <span className="logo-text">AuthX</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className="nav-link"
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://authx-rho.vercel.app" target="_blank" rel="noreferrer" className="btn-ghost">
            Live App
          </a>
          <a href="https://authx-rho.vercel.app" target="_blank" rel="noreferrer" className="btn-primary">
            Launch Wallet
          </a>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden text-[var(--cyan)] p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`burger ${menuOpen ? "open" : ""}`}>
            <span /><span /><span />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mobile-menu px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
              className="nav-link text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <a href="https://authx-rho.vercel.app" target="_blank" rel="noreferrer" className="btn-primary text-center mt-2">
            Launch Wallet →
          </a>
        </div>
      )}
    </nav>
  );
}

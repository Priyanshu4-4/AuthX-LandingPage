import "./globals.css";

export const metadata = {
  title: "AuthX — Decentralized Web3 Banking",
  description:
    "AuthX is a decentralized banking app with a built-in self-custody wallet. No MetaMask. No extensions. Deposit, transfer, and discover wallets on Ethereum Sepolia.",
  openGraph: {
    title: "AuthX — Decentralized Web3 Banking",
    description: "Web3 banking without barriers. Built-in wallet. No MetaMask needed.",
    url: "https://authx-rho.vercel.app",
    siteName: "AuthX",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

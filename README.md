# AuthX — Landing Page

> Decentralized Web3 Banking. No MetaMask. No Extensions. Your keys, your ETH, your control.

Live app: [authx-rho.vercel.app](https://authx-rho.vercel.app)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS variables
- **Animations**: Canvas API (blockchain node graph), CSS reveal animations
- **Fonts**: Space Mono (display) + DM Sans (body)

## Sections

| Component | Description |
|---|---|
| `Navbar` | Auto-hiding on scroll, mobile responsive |
| `HeroScene` | Animated blockchain node canvas + particle data packets |
| `ImpactScene` | Problem statement — 3 pain point cards with stats |
| `FeaturesScene` | Wallet features + Banking features grids |
| `WorkflowScene` | 5-step interactive walkthrough (auto-advances) |
| `SolutionScene` | Smart contract details + Architecture diagram |
| `BusinessScene` | Tech stack grid + target audience cards |
| `Footer` | Links, contract address, tagline |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy

```bash
# Vercel (recommended)
vercel deploy

# Or build for any host
npm run build
npm start
```

## Smart Contract

- **Contract**: `Bank.sol`
- **Network**: Ethereum Sepolia Testnet  
- **Address**: `0xFE7556259B388E6F82C9a4c63AA3751a4f6AcFEe`
- **Etherscan**: [View on Sepolia Etherscan](https://sepolia.etherscan.io/address/0xFE7556259B388E6F82C9a4c63AA3751a4f6AcFEe)

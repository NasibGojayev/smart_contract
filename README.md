# Decentralized Quadratic Funding Platform

This project is a decentralized application (DApp) that enables fair and democratic funding for public goods using **Quadratic Funding (QF)**. Instead of favoring large donors, QF boosts projects supported by many contributors, making funding more community-driven and transparent.

---

## 🌟 How It Works

### 1. On-Chain (Smart Contracts)
The core logic runs on Solidity smart contracts deployed to an EVM-compatible testnet.  
Smart contracts handle:

- Secure fund storage  
- Donor contributions  
- Matching pool funds  
- Round creation and settlement  
- Automatic Quadratic Funding calculations  

All contributions and results are transparent and trustless.

### 2. Off-Chain (Database)
To keep the UI fast and scalable, a NoSQL database (e.g., Firestore) is used for:

- Project listings and metadata  
- Real-time donation stats  
- Indexing blockchain events for quick queries  

The blockchain ensures trust; the database ensures performance.

---

## 🗳️ Quadratic Funding (QF)

Quadratic Funding rewards projects with broad support.

- Traditional: One $100 donor = $100 impact  
- QF: 10 donors × $1 each = **more** impact  

The formula used in the matching round:

\[
\text{Match} = \text{PoolFactor} \times \left( \sum_{i=1}^{n} \sqrt{\text{donation}_i} \right)^2
\]

This makes the system sybil-resistant and crowd-powered.

---

# Quadratic Funding DAO — Smart Contracts

The repository contains all core smart contracts:

- **GrantRegistry**
- **RoundManager**
- **DonationVault**
- **MatchingPool**
- **GovernanceToken (ERC20)**

These are built with:

- **Hardhat**
- **Solidity**
- **Viem**
- **TypeScript**

Solidity `.t.sol` test files validate the core contract functions.

---

## 🧪 Testing

Run the full test suite:

```bash
npx hardhat test


## Deployment (Testnet)

The contracts are deployed on **Base Sepolia**:

**Contract Address:**  
`<INSERT_TESTNET_CONTRACT_ADDRESS_HERE>`

**Network:** Base Sepolia  
**Chain ID:** 84532  
**RPC:** `https://sepolia.base.org`

To redeploy:

```bash
npx hardhat run scripts/deploy.js --network baseSepolia


# Hardhat Smart Contract Project

## Project Overview

This project is a **Ethereum smart contract project** built using [Hardhat](https://hardhat.org/) and Solidity. It demonstrates basic smart contract development, testing, and deployment to a test network.  

The purpose of this project is to:

- Write, compile, and deploy Ethereum smart contracts.
- Test smart contracts thoroughly using automated tests.
- Ensure code coverage of at least 80% for core functions.
- Optionally deploy contracts to a public testnet for demonstration.

---
# Hardhat  Project

This project is an Ethereum smart contract project built using Solidity and Hardhat. It includes:

- Smart contracts in `contracts/`
- Deployment scripts in `scripts/`
- Automated tests in `test/`

The purpose of this project is to demonstrate:

- Writing and compiling Solidity contracts
- Running automated tests with Hardhat and Chai
- Deploying contracts to a local Hardhat network or public testnets like Sepolia
- Ensuring tests cover core functionality (≥80% coverage)

## Requirements

- Node.js
- Hardhat
- Solidity ≥0.8.x

## How it works

1. Compile the contracts:

```bash
npx hardhat compile
Run automated tests:

bash
Kodu kopyala
npx hardhat test
Deploy contracts (local network):

bash
Kodu kopyala
npx hardhat run scripts/deploy.js
Deploy to testnet (Sepolia):

bash
Kodu kopyala
npx hardhat run scripts/deploy.js --network baseSepolia
Tests ensure all core functions behave correctly. Deployment requires sufficient funds for gas when using a public testnet.

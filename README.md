Decentralized Quadratic Funding Platform

🌟 Project Overview

This project is a decentralized application (DApp) designed to facilitate fair, democratic, and community-driven funding for public goods and open-source projects. It moves beyond traditional crowdfunding by employing the principles of Quadratic Funding (QF) to maximize the influence of individual community members.

The core goal is to prioritize projects that have broad support across many contributors, rather than projects that simply receive large, singular donations.

⚙️ How It Works: The Decentralized Architecture

The platform operates on a hybrid architecture, combining the trustless security of smart contracts with the scalability and responsiveness of a traditional database.

1. Decentralized Core (Smart Contracts)

The core logic and fund security are handled by Solidity smart contracts deployed on an Ethereum Virtual Machine (EVM) compatible Layer 2 (L2) network (such as the one simulated by the hardhatOp network configuration).

Fund Management: Smart contracts securely hold all donated funds and the dedicated matching pool.

Donation Recording: Every single contribution is recorded immutably on the blockchain, ensuring transparency and auditability.

Trustless Execution: The contract logic automatically executes the funding round, calculates the final match amounts based on the QF rules, and distributes funds without needing a central intermediary.

2. Off-Chain Data and User Experience (Database)

To provide a seamless, real-time user interface, the application uses a NoSQL database (like Firestore) for efficient data handling:

Project Listings: Storing details, descriptions, and metadata for projects seeking funding.

UI State: Managing the user interface state, like real-time totals, leaderboards, and user profiles.

Indexing: The off-chain database indexes the on-chain donation events, making the front-end application fast and avoiding slow and expensive blockchain read operations.

🗳️ The Core Mechanism: Quadratic Funding (QF)

Quadratic Funding is the engine that drives the democratic matching process.

The principle is simple: The size of the match a project receives is proportional to the square of the sum of the square roots of the donations it receives.

Why Quadratic Funding?

QF dramatically reduces the leverage of wealthy donors and increases the power of the crowd.

Traditional Crowdfunding: If one person donates $100, the project gets $100.

Quadratic Funding: The formula ensures that a project receiving ten $1 donations is given a larger match amount than a project receiving one $100 donation, even though the total contributed amount is the same. This system actively seeks out and rewards projects with popular consensus.

The QF Formula

The final match amount awarded to a project from the main matching pool is determined by the following simplified mathematical relationship, calculated automatically by the smart contracts during the settlement phase:

$$\text{Match Amount} = \text{Matching Pool Factor} \times \left( \sum_{i=1}^{n} \sqrt{\text{Contribution}_i} \right)^2$$

Where $n$ is the total number of contributions received for the project.

This formula ensures that the calculation is sybil-resistant (it encourages many small donations) and maximizes the return on community preference.

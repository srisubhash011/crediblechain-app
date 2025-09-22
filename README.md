# CredibleChain

CredibleChain is a decentralized peer-to-peer (P2P) lending platform built on the blockchain, designed to provide automated micro-loans to micro-entrepreneurs such as gig workers and small e-commerce sellers. By leveraging real-world performance data instead of traditional credit scores, CredibleChain aims to unlock access to global capital for those who need it most.

## Features

- **Alternative Credit Scoring**: Utilizes performance data from gig platforms to generate a unique "Credibility Score" for users.
- **On-Chain Reputation**: Stores the Credibility Score on the blockchain, creating a decentralized credit history.
- **Decentralized Lending Pool**: Allows lenders to deposit stablecoins into a lending pool, managed by smart contracts.
- **Smart Contract-Powered Loans**: Automates loan approval and disbursement based on the user's Credibility Score.
- **Automated Repayments**: Facilitates seamless loan repayments and interest distribution through smart contracts.

## Project Structure

```
crediblechain-app
├── backend
│   ├── src
│   │   ├── app.py
│   │   ├── credibility_score.py
│   │   └── mock_data.py
│   ├── requirements.txt
│   └── README.md
├── smart-contracts
│   ├── contracts
│   │   ├── CredibilityScore.sol
│   │   └── LendingPool.sol
│   ├── scripts
│   │   └── deploy.js
│   ├── hardhat.config.js
│   └── README.md
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── components
│   │   │   ├── BorrowerDashboard.jsx
│   │   │   ├── LenderDashboard.jsx
│   │   │   └── WalletConnect.jsx
│   │   ├── styles
│   │   │   └── tailwind.css
│   │   └── utils
│   │       └── ethers.js
│   ├── package.json
│   └── README.md
├── README.md
└── LICENSE
```

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the backend server:
   ```
   python src/app.py
   ```

### Smart Contracts

1. Navigate to the `smart-contracts` directory.
2. Install Hardhat and other dependencies:
   ```
   npm install
   ```
3. Deploy the smart contracts to the Ethereum testnet:
   ```
   npx hardhat run scripts/deploy.js --network sepolia
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install the required npm packages:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
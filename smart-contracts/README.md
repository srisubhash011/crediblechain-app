# Smart Contracts Documentation

## Overview
The smart contracts in this project are designed to facilitate a decentralized lending protocol called CredibleChain. This protocol allows micro-entrepreneurs to access loans based on their on-chain credibility scores, which are derived from their real-world performance data.

## Contracts
### 1. CredibilityScore.sol
This contract manages the on-chain storage of users' credibility scores. It includes:
- A mapping from wallet addresses to their corresponding credibility scores.
- Functions to update and retrieve scores.

### 2. LendingPool.sol
This contract manages the decentralized lending pool. It allows:
- Lenders to deposit stablecoins into the pool.
- Borrowers to request loans based on their credibility scores.
- Automated loan approvals and repayments.

## Deployment
To deploy the smart contracts, use the provided `deploy.js` script located in the `scripts` directory. Ensure that you have the necessary configurations set in `hardhat.config.js` for the Ethereum testnet.

## Usage
After deployment, the contracts can be interacted with through the frontend application. Users can connect their wallets, view their credibility scores, request loans, and manage repayments directly through the DApp interface.

## Development
- Ensure you have Node.js and Hardhat installed.
- Run `npm install` in the `smart-contracts` directory to install dependencies.
- Use `npx hardhat run scripts/deploy.js --network <network_name>` to deploy the contracts.

## Testing
Testing can be performed using Hardhat's built-in testing framework. Write tests in the `test` directory and run them using `npx hardhat test`.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
const hre = require("hardhat");

async function main() {
    // Deploy the CredibilityScore contract
    const CredibilityScore = await hre.ethers.getContractFactory("CredibilityScore");
    const credibilityScore = await CredibilityScore.deploy();
    await credibilityScore.deployed();
    console.log("CredibilityScore deployed to:", credibilityScore.address);

    // Deploy the LendingPool contract
    const LendingPool = await hre.ethers.getContractFactory("LendingPool");
    const lendingPool = await LendingPool.deploy();
    await lendingPool.deployed();
    console.log("LendingPool deployed to:", lendingPool.address);
}

// Execute the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
import { ethers } from 'ethers';

// Connect to the Ethereum network
export const connectToEthereum = async () => {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = provider.getSigner();
        return { provider, signer };
    } else {
        console.error("Please install MetaMask!");
        return null;
    }
};

// Read a value from a smart contract
export const readFromContract = async (contractAddress, abi, method, params) => {
    const { provider } = await connectToEthereum();
    const contract = new ethers.Contract(contractAddress, abi, provider);
    return await contract[method](...params);
};

// Write a value to a smart contract
export const writeToContract = async (contractAddress, abi, method, params) => {
    const { signer } = await connectToEthereum();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract[method](...params);
    await tx.wait();
    return tx;
};
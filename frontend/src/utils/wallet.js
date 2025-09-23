import { ethers } from "ethers";

// Connect to MetaMask and get signer
export async function connectWallet() {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return { provider, signer, address: await signer.getAddress() };
  } else {
    throw new Error("MetaMask not found");
  }
}

// Get current wallet address (if already connected)
export async function getCurrentWalletAddress() {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    return accounts.length > 0 ? accounts[0] : null;
  }
  return null;
}
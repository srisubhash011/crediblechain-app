import React, { useState } from 'react';
import { ethers } from 'ethers';

const WalletConnect = () => {
    const [account, setAccount] = useState(null);
    const [error, setError] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                setError(null);
            } catch (err) {
                setError('Failed to connect wallet');
            }
        } else {
            setError('Please install MetaMask');
        }
    };

    return (
        <div className="wallet-connect">
            <button onClick={connectWallet} className="bg-blue-500 text-white p-2 rounded">
                {account ? `Connected: ${account}` : 'Connect Wallet'}
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default WalletConnect;
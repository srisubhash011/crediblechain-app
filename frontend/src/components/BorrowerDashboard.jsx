import React, { useEffect, useState } from 'react';
import { getLoanEligibility, requestLoan, repayLoan } from '../utils/ethers';

const BorrowerDashboard = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [credibilityScore, setCredibilityScore] = useState(0);
    const [loanAmount, setLoanAmount] = useState(0);
    const [loanStatus, setLoanStatus] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const address = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWalletAddress(address[0]);
            const score = await getLoanEligibility(address[0]);
            setCredibilityScore(score);
        };
        fetchData();
    }, []);

    const handleLoanRequest = async () => {
        const status = await requestLoan(walletAddress, loanAmount);
        setLoanStatus(status);
    };

    const handleRepayment = async () => {
        const status = await repayLoan(walletAddress, loanAmount);
        setLoanStatus(status);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Borrower Dashboard</h1>
            <p>Your Wallet Address: {walletAddress}</p>
            <p>Your Credibility Score: {credibilityScore}</p>
            <div className="mt-4">
                <input
                    type="number"
                    placeholder="Enter Loan Amount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="border p-2"
                />
                <button onClick={handleLoanRequest} className="bg-blue-500 text-white p-2 ml-2">
                    Request Loan
                </button>
                <button onClick={handleRepayment} className="bg-green-500 text-white p-2 ml-2">
                    Repay Loan
                </button>
            </div>
            {loanStatus && <p className="mt-4">{loanStatus}</p>}
        </div>
    );
};

export default BorrowerDashboard;
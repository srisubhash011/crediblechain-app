import React, { useEffect, useState } from 'react';
import { getPoolBalance, getReturns } from '../utils/ethers';

const LenderDashboard = () => {
    const [poolBalance, setPoolBalance] = useState(0);
    const [returns, setReturns] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const balance = await getPoolBalance();
            const returnsData = await getReturns();
            setPoolBalance(balance);
            setReturns(returnsData);
        };

        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Lender Dashboard</h1>
            <div className="mt-4">
                <h2 className="text-xl">Pool Balance: {poolBalance} USDC</h2>
                <h2 className="text-xl">Returns: {returns} USDC</h2>
            </div>
            <div className="mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Deposit Funds
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded ml-2">
                    Withdraw Returns
                </button>
            </div>
        </div>
    );
};

export default LenderDashboard;
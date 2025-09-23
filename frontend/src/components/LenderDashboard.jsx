import React, { useState } from "react";

export default function LenderDashboard() {
  const [depositAmount, setDepositAmount] = useState("");
  const [poolBalance, setPoolBalance] = useState(50000);

  const loanRequests = [
    {
      name: "Priya Sharma",
      avatar:
        "https://images.unsplash.com/photo-1661436170168-7ce82d649532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODQ1MDcxMXww&ixlib=rb-4.1.0&q=80&w=1080",
      platform: "Swiggy Delivery",
      amount: 4000,
      interest: "7%/month",
      status: "Pending",
      requestDate: "22 Jan 2025",
      score: 680,
      action: "Approve",
    },
    {
      name: "Amit Patel",
      avatar:
        "https://images.unsplash.com/photo-1736092828791-4c8871e42b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkZWxpdmVyeSUyMHdvcmtlciUyMGJpa2V8ZW58MXx8fHwxNzU4NTM1OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      platform: "Ola Driver",
      amount: 6000,
      interest: "6%/month",
      status: "Approved",
      requestDate: "20 Jan 2025",
      score: 720,
      action: "Approved",
    },
    {
      name: "Ravi Kumar",
      avatar:
        "https://images.unsplash.com/photo-1649433658557-54cf58577c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTg1MzU5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      platform: "Zomato Delivery",
      amount: 5000,
      interest: "6%/month",
      status: "Approved",
      requestDate: "18 Jan 2025",
      score: 730,
      action: "Approved",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Pool Overview & Manage Funds */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-xl p-6 text-white shadow">
          <h3 className="text-xl font-bold mb-4">Pool Overview</h3>
          <div className="flex gap-8 mb-6">
            <div>
              <span className="text-gray-300">Your Balance</span>
              <div className="text-2xl font-bold text-green-300 mt-1">
                ₹{poolBalance.toLocaleString()}
              </div>
            </div>
            <div>
              <span className="text-gray-300">Estimated APY</span>
              <div className="text-2xl font-bold text-blue-300 mt-1">8.5%</div>
            </div>
          </div>
          <div className="bg-purple-900 bg-opacity-60 rounded-lg p-4 mb-4">
            <div className="text-indigo-200 mb-2">Monthly Earnings Projection</div>
            <div className="flex justify-between text-lg">
              <span>Interest on loans:</span>
              <span className="font-bold text-green-300">₹354</span>
            </div>
            <div className="flex justify-between text-lg mt-2">
              <span>Total monthly return:</span>
              <span className="font-bold text-pink-300">₹354</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-xl p-6 text-white shadow">
          <h3 className="text-xl font-bold mb-4">Manage Funds</h3>
          <div className="flex gap-4 mb-4">
            <button className="bg-green-500 px-6 py-2 rounded-lg font-semibold shadow hover:scale-105 transition">
              + Deposit
            </button>
            <button className="bg-gray-700 px-6 py-2 rounded-lg font-semibold shadow hover:scale-105 transition">
              − Withdraw
            </button>
          </div>
          <input
            type="number"
            placeholder="Enter amount to deposit"
            value={depositAmount}
            onChange={e => setDepositAmount(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-900 text-white mb-4 border border-gray-700"
          />
          <button
            className="w-full bg-gradient-to-r from-indigo-400 to-purple-400 px-6 py-2 rounded-lg text-white font-semibold shadow hover:scale-105 transition"
            disabled={!depositAmount || depositAmount <= 0}
          >
            Enter valid amount to continue
          </button>
        </div>
      </div>

      {/* Available Loan Requests */}
      <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-xl p-6 text-white shadow mt-8">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold">!</span>
          Available Loan Requests
        </h3>
        <table className="w-full text-left">
          <thead>
            <tr className="text-indigo-200">
              <th className="py-2">Borrower</th>
              <th>Amount</th>
              <th>Interest</th>
              <th>Status</th>
              <th>Request Date</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loanRequests.map((loan, idx) => (
              <tr key={idx} className="border-t border-indigo-700">
                <td className="py-2 flex items-center gap-2">
                  <img
                    src={loan.avatar}
                    alt={loan.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{loan.name}</div>
                    <div className="text-xs text-gray-300">{loan.platform}</div>
                  </div>
                </td>
                <td className="text-green-300 font-bold">₹{loan.amount.toLocaleString()}</td>
                <td>{loan.interest}</td>
                <td>
                  <span
                    className={`px-3 py-1 rounded text-xs ${
                      loan.status === "Approved"
                        ? "bg-blue-700 text-white"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    {loan.status}
                  </span>
                </td>
                <td>{loan.requestDate}</td>
                <td>
                  <span className="bg-purple-700 px-3 py-1 rounded text-white text-xs">
                    {loan.score}
                  </span>
                </td>
                <td>
                  {loan.action === "Approve" ? (
                    <button className="bg-green-500 px-4 py-1 rounded text-white font-semibold hover:bg-green-600 transition">
                      Approve
                    </button>
                  ) : (
                    <span className="bg-blue-700 px-4 py-1 rounded text-white font-semibold">
                      {loan.action}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
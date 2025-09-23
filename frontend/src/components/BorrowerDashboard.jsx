import React, { useState } from "react";

export default function BorrowerDashboard() {
  const [loanAmount, setLoanAmount] = useState("");
  const [loans, setLoans] = useState([
    {
      amount: 5000,
      interest: "6%/month",
      status: "Approved",
      requestDate: "20 Jan 2025",
      action: "Repay",
    },
  ]);

  const user = {
    name: "Ganesh Kumar",
    avatar:
      "https://images.unsplash.com/photo-1649433658557-54cf58577c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW4lMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTg1MzU5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    platform: "Zomato Delivery",
    monthlyIncome: 30000,
    completedOrders: 120,
    rating: 4.8,
    credibilityScore: 730,
    totalBorrowed: 8000,
    repaidOnTime: "100%",
    activeLoans: 1,
    creditUtilization: "32%",
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* Profile & Credibility Score */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-xl p-6 text-white shadow">
          <div className="flex flex-col items-center">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-300 text-sm mb-4">{user.platform}</p>
            <div className="space-y-2 text-sm w-full">
              <div className="flex justify-between">
                <span className="text-gray-300">Monthly Income:</span>
                <span className="font-medium text-green-300">
                  ₹{user.monthlyIncome.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Completed Orders:</span>
                <span className="font-medium">{user.completedOrders}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Rating:</span>
                <span className="font-medium">{user.rating}⭐</span>
              </div>
            </div>
          </div>
        </div>
        {/* Credibility Score Card */}
        <div className="bg-gradient-to-br from-purple-800 to-indigo-800 rounded-xl p-6 text-white shadow flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{user.credibilityScore}</div>
            <div className="text-lg mb-2">/850</div>
            <div className="bg-blue-600 px-4 py-1 rounded-full inline-block font-semibold mb-2">
              Good
            </div>
            <div className="flex justify-between mt-4 text-sm">
              <div>
                <span className="font-bold text-green-300">Payment</span>
                <br />
                100%
              </div>
              <div>
                <span className="font-bold text-purple-300">Activity</span>
                <br />
                High
              </div>
              <div>
                <span className="font-bold text-blue-300">Stability</span>
                <br />
                Good
              </div>
            </div>
          </div>
        </div>
        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-xl p-6 text-white shadow">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-300">Total Borrowed</p>
              <p className="font-medium text-lg">₹{user.totalBorrowed.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-300">Repaid On Time</p>
              <p className="font-medium text-lg text-green-400">{user.repaidOnTime}</p>
            </div>
            <div>
              <p className="text-gray-300">Active Loans</p>
              <p className="font-medium text-lg">{user.activeLoans}</p>
            </div>
            <div>
              <p className="text-gray-300">Credit Utilization</p>
              <p className="font-medium text-lg">{user.creditUtilization}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Instant Loan Request */}
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-6 text-white shadow mt-8">
        <h3 className="text-xl font-bold mb-2">Instant Loan Request</h3>
        <p className="mb-4 text-indigo-200">
          Get approved in seconds with your credibility score
        </p>
        <div className="flex gap-8 mb-4">
          <div>
            <span className="text-gray-300">Eligible Amount</span>
            <div className="text-2xl font-bold text-green-300 mt-1">₹15,000</div>
          </div>
          <div>
            <span className="text-gray-300">Interest Rate</span>
            <div className="text-2xl font-bold text-blue-300 mt-1">6%/month</div>
          </div>
        </div>
        <input
          type="number"
          placeholder="Enter amount"
          value={loanAmount}
          onChange={e => setLoanAmount(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-900 text-white mb-4 border border-gray-700"
        />
        <button
          className="bg-gradient-to-r from-indigo-400 to-purple-400 px-6 py-2 rounded-lg text-white font-semibold shadow hover:scale-105 transition"
          disabled={!loanAmount || loanAmount <= 0}
        >
          Request Loan
        </button>
        <div className="flex gap-4 mt-4 text-xs text-indigo-200">
          <span>Instant Processing</span>
          <span>•</span>
          <span>Secure</span>
          <span>•</span>
          <span>Transparent</span>
        </div>
      </div>

      {/* My Loans Table */}
      <div className="bg-gradient-to-br from-indigo-800 to-purple-800 rounded-xl p-6 text-white shadow mt-8">
        <h3 className="text-lg font-bold mb-4">My Loans</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="text-indigo-200">
              <th className="py-2">Amount</th>
              <th>Interest</th>
              <th>Status</th>
              <th>Request Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, idx) => (
              <tr key={idx} className="border-t border-indigo-700">
                <td className="py-2 text-green-300 font-bold">₹{loan.amount.toLocaleString()}</td>
                <td>{loan.interest}</td>
                <td>
                  <span className="bg-blue-700 px-3 py-1 rounded text-white text-xs">
                    {loan.status}
                  </span>
                </td>
                <td>{loan.requestDate}</td>
                <td>
                  <button className="bg-purple-600 px-4 py-1 rounded text-white font-semibold hover:bg-purple-700 transition">
                    {loan.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
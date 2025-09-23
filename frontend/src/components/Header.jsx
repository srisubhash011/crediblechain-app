import React from "react";

export default function Header({ walletConnected, currentView, setView }) {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white shadow">
      <div className="flex items-center gap-3">
        <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
          C
        </div>
        <span className="text-xl font-semibold">Credible Chain</span>
        <span className="ml-4 text-gray-300 text-sm">
          A Decentralised Lending Platform
        </span>
      </div>
      <nav className="flex gap-4">
        <button
          className={`px-4 py-2 rounded ${currentView === "borrower" ? "bg-purple-700" : "bg-transparent"} font-semibold`}
          onClick={() => setView("borrower")}
        >
          Borrower
        </button>
        <button
          className={`px-4 py-2 rounded ${currentView === "lender" ? "bg-purple-700" : "bg-transparent"} font-semibold`}
          onClick={() => setView("lender")}
        >
          Lender
        </button>
        <button
          className={`px-4 py-2 rounded ${currentView === "activity" ? "bg-purple-700" : "bg-transparent"} font-semibold`}
          onClick={() => setView("activity")}
        >
          Activity
        </button>
      </nav>
      <div className="flex items-center gap-2">
        {walletConnected && (
          <span className="bg-gray-800 px-3 py-1 rounded text-sm font-mono">
            Connected 0x1234...5678
          </span>
        )}
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-indigo-700 font-bold">
          <i className="fa fa-user"></i>
        </div>
      </div>
    </header>
  );
}
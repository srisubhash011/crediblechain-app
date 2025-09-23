import React from "react";

export default function LandingPage({ onConnectWallet }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-6 bg-gray-100 bg-opacity-30">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold text-white">
            C
          </div>
          <span className="text-2xl font-semibold text-indigo-100">
            Credible Chain
          </span>
          <span className="ml-4 text-gray-200 text-sm">
            A Decentralised Lending Platform
          </span>
        </div>
        <button
          className="bg-gradient-to-r from-indigo-400 to-purple-400 px-6 py-2 rounded-lg text-white font-semibold shadow hover:scale-105 transition"
          onClick={onConnectWallet}
        >
          <i className="fa fa-wallet mr-2"></i>
          Connect Wallet
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center mt-24">
        <div className="mb-6">
          <span className="bg-purple-800 bg-opacity-60 px-4 py-2 rounded-full text-lg font-medium flex items-center gap-2">
            <span role="img" aria-label="lightning">⚡</span>
            Revolutionizing DeFi Lending
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6">
          Decentralized <br />
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Lending Platform
          </span>
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-8 text-indigo-100">
          Connect lenders with gig workers through blockchain-powered micro-loans.<br />
          Experience lightning-fast, secure lending based on real credibility scores.
        </p>
        <button
          className="bg-gradient-to-r from-indigo-400 to-purple-400 px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:scale-105 transition mb-6"
          onClick={onConnectWallet}
        >
          <i className="fa fa-wallet mr-2"></i>
          Connect Wallet
        </button>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex -space-x-2">
            <span className="w-6 h-6 rounded-full bg-pink-400 border-2 border-white"></span>
            <span className="w-6 h-6 rounded-full bg-purple-400 border-2 border-white"></span>
            <span className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white"></span>
          </div>
          <span className="text-indigo-100 font-medium ml-2">2,500+ active users</span>
        </div>
      </main>
    </div>
  );
}
import React, { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import BorrowerDashboard from "./components/BorrowerDashboard";
import LenderDashboard from "./components/LenderDashboard";

export default function App() {
  const [view, setView] = useState("landing");
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900">
      <Header walletConnected={walletConnected} currentView={view} setView={setView} />
      {view === "landing" && (
        <LandingPage
          onConnectWallet={() => {
            setWalletConnected(true);
            setView("borrower");
          }}
        />
      )}
      {view === "borrower" && <BorrowerDashboard />}
      {view === "lender" && <LenderDashboard />}
      {/* Add ActivityDashboard if needed */}
    </div>
  );
}
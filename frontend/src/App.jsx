import React, { useState } from "react";
import WalletConnect from "./components/WalletConnect";
import BorrowerDashboard from "./components/BorrowerDashboard";
import LenderDashboard from "./components/LenderDashboard";

export default function App() {
  const [view, setView] = useState("borrower");

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <WalletConnect />
      <div className="flex gap-4 mt-6">
        <button onClick={() => setView("borrower")} className="btn">Borrower</button>
        <button onClick={() => setView("lender")} className="btn">Lender</button>
      </div>
      <div className="mt-6">
        {view === "borrower" ? <BorrowerDashboard /> : <LenderDashboard />}
      </div>
    </div>
  );
}
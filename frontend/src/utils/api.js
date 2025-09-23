// Example API utility for backend communication

const BASE_URL = "http://localhost:3000"; // Change to your backend URL

export async function fetchUserProfile(walletAddress) {
  const res = await fetch(`${BASE_URL}/user/${walletAddress}`);
  if (!res.ok) throw new Error("Failed to fetch user profile");
  return await res.json();
}

export async function fetchCredibilityScore(walletAddress) {
  const res = await fetch(`${BASE_URL}/score/${walletAddress}`);
  if (!res.ok) throw new Error("Failed to fetch credibility score");
  return await res.json();
}

export async function submitLoanRequest(walletAddress, amount, interestRate) {
  const res = await fetch(`${BASE_URL}/loan/request`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ walletAddress, amount, interestRate }),
  });
  if (!res.ok) throw new Error("Failed to submit loan request");
  return await res.json();
}
export function calculateCredibilityScore({ monthlyIncome, completedOrders, rating }) {
  // Simple scoring logic for demonstration
  let score = 300;
  score += Math.min(monthlyIncome / 100, 200);
  score += Math.min(completedOrders, 200);
  score += rating * 10;
  return Math.min(score, 850);
}
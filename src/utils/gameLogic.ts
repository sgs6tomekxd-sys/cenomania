export const calculateScore = (actual: number, guess: number): number => {
  if (guess < 0) return 0;
  
  const diff = Math.abs(actual - guess);
  const errorRatio = diff / actual;
  
  // If error is more than 100% (e.g. price 10, guess 25), score is 0.
  // Or maybe we should be more lenient?
  // Let's say if you are within 10%, you get max points? No, exact is best.
  
  // Linear scale:
  // 0% error -> 1000 points
  // 50% error -> 500 points
  // 100% error -> 0 points
  
  let score = 1000 * (1 - errorRatio);
  
  // Bonus for very close guess (within 5%)
  if (errorRatio <= 0.05) {
    score += 200; // Bonus
  }

  return Math.max(0, Math.round(score));
};

export const formatPrice = (price: number, currency: string): string => {
  return `${price.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}`;
};

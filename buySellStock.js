// arr = [7, 6, 4, 3, 1] 
// o/p : 0 ✅ (no profit possible)

function buySellStock(arr) {
  let maxProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let profit = arr[j] - arr[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}
// arr = [7, 6, 4, 3, 1]
// o/p : 0 ✅ (no profit possible)

// function buySellStockBruteForceMethod(arr) {
//   let maxProfit = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let profit = arr[j] - arr[i];
//       if (profit > maxProfit) {
//         maxProfit = profit;
//       }
//     }
//   }

//   return maxProfit;
// }

// console.log(buySellStockBruteForceMethod([7, 1, 5, 3, 6, 4]));
// console.log(buySellStockBruteForceMethod([7, 6, 4, 3, 1]));

const arr = [7, 2, 4, 5, 1, 3, 6, 4];

function buySellStok(arr) {
  let buyPrice = arr[0];

  let profit = 0; //at day 1 profit will be zero as bought at 7 and if sold then sp : 7

  for (let i = 1; i < arr.length; i++) {
    if (buyPrice > arr[i]) {
      // if the current price is less then update the buy price
      buyPrice = arr[i];
    } else {
      // else check if we can get better profit
      let currentProfit = arr[i] - buyPrice;
      profit = Math.max(currentProfit, profit);
    }
  }

  return profit;
}

console.log(buySellStok(arr));


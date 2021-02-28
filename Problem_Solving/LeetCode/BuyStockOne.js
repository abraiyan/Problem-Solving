/*
    Problem: Best Time to Buy and Sell Stock (https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

    < Input: prices = [7,1,5,3,6,4]
    < Output: 5


    # Use: Array, Two Pointer
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var maxProfit = function (prices) {
  let i = 0
  let maxProfit = 0
  let currentProfit = 0

  for (let j = 1; j < prices.length; j++) {
    if (prices[j] < prices[i]) {
      i = j
      continue
    }

    currentProfit = prices[j] - prices[i]
    if (currentProfit > maxProfit) maxProfit = currentProfit
  }

  return maxProfit
}

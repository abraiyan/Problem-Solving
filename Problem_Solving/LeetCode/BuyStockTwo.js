/*
    Problem: Best Time to Buy and Sell Stock II (https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

    < Input: prices = [7,1,5,3,6,4]
    < Output: 7
    < Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
    < Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.      


    # Use: Array, Peak Valley Approach
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var maxProfit = function (prices) {
  let maxProfit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1]
    }
  }
  return maxProfit
}

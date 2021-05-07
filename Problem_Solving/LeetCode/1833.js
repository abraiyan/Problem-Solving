/*
    Problem: Maximum Ice Cream Bars (https://leetcode.com/problems/maximum-ice-cream-bars/)

    # Array
    -> Time Complexity: O(nlogn), Space Complexity: O(1)
*/

var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b)
  let output = 0
  let total = 0

  for (const n of costs) {
    total += n
    if (total <= coins) output++
    else break
  }

  return output
}

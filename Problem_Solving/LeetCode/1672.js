/*
    Problem: Richest Customer Wealth (https://leetcode.com/problems/richest-customer-wealth/)

    -> Time Complexity: O(n * m), Space Complexity: O(1)
*/

var maximumWealth = function (accounts) {
  let max = 0
  let current = 0

  for (let i = 0; i < accounts.length; i++) {
    current = 0
    for (let j = 0; j < accounts[i].length; j++) {
      current += accounts[i][j]
    }

    if (current > max) max = current
  }

  return max
}

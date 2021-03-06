/*
    Problem: Min Cost Climbing Stairs (https://leetcode.com/problems/min-cost-climbing-stairs/)

    < Input: cost = [10, 15, 20]
    < Output: 15
    < Explanation: Cheapest is start on cost[1], pay that cost and go to the top.

    < Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
    < Output: 6
    < Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].

    # Array
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var minCostClimbingStairs = function (cost) {
  let i = cost[0]
  let j = cost[1]

  for (let x = 2; x < cost.length; x++) {
    let current = cost[x] + Math.min(i, j)
    i = j
    j = current
  }

  return Math.min(i, j)
}

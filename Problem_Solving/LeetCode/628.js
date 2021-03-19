/*
    Problem: Maximum Product of Three Numbers (https://leetcode.com/problems/maximum-product-of-three-numbers/)
 
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var maximumProduct = function (nums) {
  let min_one = null
  let min_two = null
  let max_one = null
  let max_two = null
  let max_three = null

  for (const n of nums) {
    if (min_one === null || min_one >= n) {
      min_two = min_one
      min_one = n
    } else if (min_two === null || min_two >= n) {
      min_two = n
    }

    if (max_one === null || max_one <= n) {
      max_three = max_two
      max_two = max_one
      max_one = n
    } else if (max_two === null || max_two <= n) {
      max_three = max_two
      max_two = n
    } else if (max_three === null || max_three <= n) {
      max_three = n
    }
  }

  return Math.max(min_one * min_two * max_one, max_one * max_two * max_three)
}

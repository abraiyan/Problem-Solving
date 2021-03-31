/*
    Problem: Count Negative Numbers in a Sorted Matrix (https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/)
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var countNegatives = function (grid) {
  let output = 0
  let r = grid.length - 1
  let c = 0

  while (r >= 0 && c < grid[0].length) {
    if (grid[r][c] < 0) {
      output += grid[0].length - c
      r--
    } else {
      c++
    }
  }

  return output
}

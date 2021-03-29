/*
    Problem: Lucky Numbers in a Matrix (https://leetcode.com/problems/lucky-numbers-in-a-matrix/)
    -> Time Complexity: O(m * n), Space Complexity: O(n)
*/

var luckyNumbers = function (matrix) {
  let r = matrix.length
  let c = matrix[0].length

  let output = []
  let rowMin = new Array(r).fill(100000)
  let columnMax = new Array(c).fill(0)

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      rowMin[i] = Math.min(rowMin[i], matrix[i][j])
      columnMax[j] = Math.max(columnMax[j], matrix[i][j])
    }
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (matrix[i][j] <= rowMin[i] && matrix[i][j] >= columnMax[j]) {
        output.push(matrix[i][j])
        break
      }
    }
  }

  return output
}

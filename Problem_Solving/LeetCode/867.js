/*
    Problem: Transpose Matrix (https://leetcode.com/problems/transpose-matrix/)
*/

var transpose = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let output = []

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      output[j][i] = matrix[j][i]
    }
  }

  return output
}

transpose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])

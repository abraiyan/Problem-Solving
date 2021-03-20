/*
    Problem: Matrix Diagonal Sum (https://leetcode.com/problems/matrix-diagonal-sum/)
 
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var diagonalSum = function (mat) {
  let total = 0

  for (let i = 0; i < mat.length; i++) {
    total += mat[i][i]
  }

  let j = mat.length - 1

  for (let i = 0; i < mat.length; i++) {
    if (i === j) {
      j--
      continue
    }
    total += mat[i][j]
    j--
  }

  return total
}

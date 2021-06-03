/*
    Problem: Toeplitz Matrix (https://leetcode.com/problems/toeplitz-matrix/)
*/

var isToeplitzMatrix = function (matrix) {
  let reference = []
  let temp = []
  let x = 0

  for (let i = 0; i < matrix[0].length; i++) {
    reference.push(matrix[0][i])
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (j < 1) {
        temp.push(matrix[i][j])
        continue
      }

      if (matrix[i][j] !== reference[x]) {
        return false
      }
      temp.push(matrix[i][j])
      x++
    }
    reference = temp
    temp = []
    x = 0
  }

  return true
}

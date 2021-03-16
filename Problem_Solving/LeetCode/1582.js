/*
    Problem: Special Positions in a Binary Matrix (https://leetcode.com/problems/special-positions-in-a-binary-matrix/)
 
    -> Time Complexity: O(n * m), Space Complexity: O(n)
*/

var numSpecial = function (mat) {
  let rows = new Array(mat.length).fill(0)
  let cols = new Array(mat[0].length).fill(0)

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) {
        rows[i] += 1
        cols[j] += 1
      }
    }
  }

  let output = 0

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
        output++
      }
    }
  }

  return output
}

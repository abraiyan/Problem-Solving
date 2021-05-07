/*
    Problem: Cells with Odd Values in a Matrix (https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/)

    # Array
    -> Time Complexity: O(indecies.length * m * n), Space Complexity: O(m * n)
*/

var oddCells = function (m, n, indices) {
  let array = Array(m)
    .fill()
    .map(() => Array(n).fill(0))
  let output = 0

  for (let i = 0; i < indices.length; i++) {
    for (let x = 0; x < n; x++) {
      array[indices[i][0]][x]++
      if (array[indices[i][0]][x] % 2 !== 0) {
        output++
      } else {
        output--
      }
    }

    for (let y = 0; y < m; y++) {
      array[y][indices[i][1]]++
      if (array[y][indices[i][1]] % 2 !== 0) {
        output++
      } else {
        output--
      }
    }
  }

  return output
}

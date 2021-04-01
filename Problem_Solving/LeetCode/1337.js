/*
    Problem: The K Weakest Rows in a Matrix (https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/)

    # HashMap, Sorting
    -> Time Complexity: O(n * m), Space Complexity: O(n)
*/

var kWeakestRows = function (mat, k) {
  let map = new Map()
  let output = []

  for (let i = 0; i < mat.length; i++) {
    let count = 0
    let j = 0

    while (j < mat[0].length && mat[i][j] !== 0) {
      count++
      j++
    }

    map.set(i, count)
    output.push(i)
  }

  output.sort((a, b) => {
    return map.get(a) === map.get(b) ? a - b : map.get(a) - map.get(b)
  })

  return output.slice(0, k)
}

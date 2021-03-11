/*
    Problem: Island Perimeter (https://leetcode.com/problems/island-perimeter/)
 
    -> Time Complexity: O(n^2), Space Complexity: O(1)
*/

var islandPerimeter = function (grid) {
  let output = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let total = 4
        if (i !== 0 && grid[i - 1][j] === 1) {
          total--
        }

        if (i !== grid.length - 1 && grid[i + 1][j] === 1) {
          total--
        }

        if (j !== 0 && grid[i][j - 1] === 1) {
          total--
        }

        if (j !== grid[i][j].length - 1 && grid[i][j + 1] === 1) {
          total--
        }

        output += total
      }
    }
  }

  return output
}

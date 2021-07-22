/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let rowMap = new Array(grid.length).fill(0)
  let columnMap = new Array(grid.length).fill(0)
  let output = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      rowMap[i] = Math.max(rowMap[i], grid[i][j])
      columnMap[j] = Math.max(columnMap[j], grid[i][j])
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      output += Math.min(rowMap[i], columnMap[j]) - grid[i][j]
    }
  }

  return output
}

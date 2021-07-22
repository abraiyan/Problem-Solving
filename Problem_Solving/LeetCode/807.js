/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let rowMap = new Map()
  let columnMap = new Map()
  let output = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (rowMap.has(i)) {
        if (rowMap.get(i) < grid[i][j]) {
          rowMap.set(i, grid[i][j])
        }
      } else {
        rowMap.set(i, grid[i][j])
      }

      if (columnMap.has(j)) {
        if (columnMap.get(j) < grid[i][j]) {
          columnMap.set(j, grid[i][j])
        }
      } else {
        columnMap.set(j, grid[i][j])
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let current = grid[i][j]
      if (current >= rowMap.get(i) && current >= columnMap.get(j)) {
        continue
      } else if (rowMap.get(i) <= columnMap.get(j)) {
        output += rowMap.get(i) - current
      } else {
        output += columnMap.get(j) - current
      }
    }
  }

  return output
}

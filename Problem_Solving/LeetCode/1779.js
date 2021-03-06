/*
    Problem: Find Nearest Point That Has the Same X or Y Coordinate (https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/)

    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var nearestValidPoint = function (x, y, points) {
  let shortestDistance = -1
  let index = -1

  for (let i = 0; i < points.length; i++) {
    if (points[i][0] === x || points[i][1] === y) {
      if (shortestDistance === -1) {
        shortestDistance =
          Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y)
        index = i
        continue
      }

      let temp = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y)
      if (temp < shortestDistance) {
        shortestDistance = temp
        index = i
      }
    }
  }

  return index
}

/*
    Problem: Minimum Time Visiting All Points (https://leetcode.com/problems/minimum-time-visiting-all-points/)

    # Array, Math
    -> Time Complexity: O(n), Space Complexity: O(1)

*/

var minTimeToVisitAllPoints = function (points) {
  let output = 0

  for (let i = 0; i < points.length - 1; i++) {
    output += Math.max(
      Math.abs(points[i][0] - points[i + 1][0]),
      Math.abs(points[i][1] - points[i + 1][1])
    )
  }

  return output
}

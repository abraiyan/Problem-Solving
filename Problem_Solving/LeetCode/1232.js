/*
    Problem: Check If It Is a Straight Line (https://leetcode.com/problems/check-if-it-is-a-straight-line/)
*/

var checkStraightLine = function (coordinates) {
  for (let i = 2; i < coordinates.length; i++) {
    let y1_y0 = coordinates[i - 1][1] - coordinates[i - 2][1]
    let y2_y1 = coordinates[i][1] - coordinates[i - 1][1]
    let x1_x0 = coordinates[i - 1][0] - coordinates[i - 2][0]
    let x2_x1 = coordinates[i][0] - coordinates[i - 1][0]
    if (y1_y0 * x2_x1 !== y2_y1 * x1_x0) return false
  }
  return true
}

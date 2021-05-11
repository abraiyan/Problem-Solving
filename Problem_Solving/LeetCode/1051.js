/*
    Problem: Height Checker (https://leetcode.com/problems/height-checker/)

*/

var heightChecker = function (heights) {
  let checkArray = [...heights]
  checkArray.sort((a, b) => a - b)
  let output = 0

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== checkArray[i]) output++
  }

  return output
}

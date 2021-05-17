/*
    Problem: Minimum Absolute Difference (https://leetcode.com/problems/minimum-absolute-difference/)

*/

var minimumAbsDifference = function (arr) {
  if (arr.length === 2) return [arr[0], arr[1]]
  let array = [...arr]
  array.sort((a, b) => a - b)

  let gap = array[1] - array[0]
  let output = []

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] - array[i] <= gap) {
      if (array[i + 1] - array[i] < gap) {
        gap = array[i + 1] - array[i]
        output = []
      }
      output.push([array[i], array[i + 1]])
    }
  }

  return output
}

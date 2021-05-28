/*
    Problem: Mean of Array After Removing Some Elements (https://leetcode.com/problems/mean-of-array-after-removing-some-elements/)
*/

var trimMean = function (arr) {
  arr.sort((a, b) => a - b)
  let n = arr.length
  let start = parseInt(n * 0.05)
  let end = n - start - 1
  let total = 0

  for (let i = start; i <= end; i++) {
    total += arr[i]
  }

  return total / ((n * 9) / 10)
}

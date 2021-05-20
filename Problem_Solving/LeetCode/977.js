/*
    Problem: Squares of a Sorted Array (https://leetcode.com/problems/squares-of-a-sorted-array/)
*/

var sortedSquares = function (nums) {
  let output = new Array(nums.length)
  let i = 0
  let j = nums.length - 1

  for (let x = nums.length - 1; x >= 0; x--) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      output[x] = nums[i] * nums[i]
      i++
    } else {
      output[x] = nums[j] * nums[j]
      j--
    }
  }

  return output
}

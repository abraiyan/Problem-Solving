/*
    Problem: Sort Array By Parity (https://leetcode.com/problems/sort-array-by-parity/)
*/

var sortArrayByParity = function (nums) {
  let x = 0,
    y = nums.length - 1

  while (x < y) {
    if (nums[x] % 2 > nums[y] % 2) {
      let temp = nums[x]
      nums[x++] = nums[y]
      nums[y--] = temp
    }

    if (nums[x] % 2 === 0) x++
    if (nums[y] % 2 === 1) y--
  }
  return nums
}

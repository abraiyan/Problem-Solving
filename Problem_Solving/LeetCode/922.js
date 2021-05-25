/*
    Problem: Sort Array By Parity II (https://leetcode.com/problems/sort-array-by-parity-ii/)
*/

var sortArrayByParityII = function (nums) {
  let x = 0
  let y = 1

  while (x < nums.length && y < nums.length) {
    let checkOne = (nums[x] + x) % 2
    let checkTwo = (nums[y] + y) % 2

    if (checkOne === 1 && checkTwo === 1) {
      let temp = nums[x]
      nums[x] = nums[y]
      nums[y] = temp
      x += 2
      y += 2
    } else {
      if (checkOne === 0) x += 2
      if (checkTwo === 0) y += 2
    }
  }

  return nums
}

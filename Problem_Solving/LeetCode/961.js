/*
    Problem: N-Repeated Element in Size 2N Array (https://leetcode.com/problems/n-repeated-element-in-size-2n-array/)
*/

var repeatedNTimes = function (nums) {
  let x = nums.length / 2
  let map = new Map()

  for (const n of nums) {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1)
    if (map.get(n) > 1) return n
  }

  return null
}

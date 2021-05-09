/*
    Problem: Relative Sort Array (https://leetcode.com/problems/relative-sort-array/)

    # Array
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var relativeSortArray = function (arr1, arr2) {
  let counter = new Array(1001).fill(0)
  let ans = new Array(arr1.length)
  let k = 0

  for (const n of arr1) {
    counter[n]++
  }

  for (const n of arr2) {
    while (counter[n]-- > 0) {
      ans[k++] = n
    }
  }

  for (let i = 0; i < 1001; i++) {
    while (counter[i]-- > 0) {
      ans[k++] = i
    }
  }

  return ans
}

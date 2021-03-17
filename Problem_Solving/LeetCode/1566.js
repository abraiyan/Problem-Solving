/*
    Problem: Detect Pattern of Length M Repeated K or More Times (https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/)
 
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var containsPattern = function (arr, m, k) {
  let count = 0

  for (let i = 0; i < arr.length - m; i++) {
    if (arr[i] === arr[i + m]) {
      count++
    } else {
      count = 0
    }

    if (count === m * (k - 1)) return true
  }

  return false
}

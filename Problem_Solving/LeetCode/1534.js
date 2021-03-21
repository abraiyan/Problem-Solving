/*
    Problem: Count Good Triplets (https://leetcode.com/problems/count-good-triplets/)
  
    -> Time Complexity: O(n ^ 3), Space Complexity: O(1)
*/

var countGoodTriplets = function (arr, a, b, c) {
  let output = 0

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (Math.abs(arr[i] - arr[j]) <= a) {
        for (let k = j + 1; k < arr.length; k++) {
          if (
            Math.abs(arr[j] - arr[k]) <= b &&
            Math.abs(arr[i] - arr[k]) <= c
          ) {
            output++
          }
        }
      }
    }
  }

  return output
}

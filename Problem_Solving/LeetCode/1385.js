/*
    Problem: Find the Distance Value Between Two Arrays (https://leetcode.com/problems/find-the-distance-value-between-two-arrays/)
    -> Time Complexity: O(n * m), Space Complexity: O(1)
*/

var findTheDistanceValue = function (arr1, arr2, d) {
  let output = arr1.length
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        output--
        break
      }
    }
  }
  return output
}

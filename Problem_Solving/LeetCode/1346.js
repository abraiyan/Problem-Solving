/*
    Problem: Check If N and Its Double Exist (https://leetcode.com/problems/check-if-n-and-its-double-exist/)
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var checkIfExist = function (arr) {
  let output = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (output.has(arr[i] * 2) || output.has(arr[i] / 2)) {
      return true
    } else {
      output.add(arr[i])
    }
  }
  return false
}

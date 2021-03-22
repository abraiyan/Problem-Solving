/*
    Problem: XOR Operation in an Array (https://leetcode.com/problems/xor-operation-in-an-array/)
  
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var xorOperation = function (n, start) {
  let xor_arr

  for (let i = 0; i < n; i++) {
    xor_arr = xor_arr ^ (start + 2 * i)
  }

  return xor_arr
}

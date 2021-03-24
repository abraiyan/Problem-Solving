/*
    Problem: Check If All 1's Are at Least Length K Places Away (https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/)
  
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var kLengthApart = function (nums, k) {
  let distance = k

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (distance < k) return false
      distance = 0
    } else {
      distance++
    }
  }

  return true
}

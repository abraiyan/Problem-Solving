/*
    Problem: 674. Longest Continuous Increasing Subsequence (https://leetcode.com/problems/longest-continuous-increasing-subsequence/)

    < Input: nums = [1,3,5,4,7]
    < Output: 3
    < Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
    <Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element 4.      


    # Use: Array
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) return 0
  let max = 1
  let current = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      current++
    } else {
      current = 1
    }
    if (current > max) max = current
  }

  return max
}

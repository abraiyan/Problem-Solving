/*
    Problem: Shuffle the Array (https://leetcode.com/problems/shuffle-the-array/)
  
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var shuffle = function (nums, n) {
  let i = 0
  let j = n
  let output = []
  while (j < nums.length) {
    output.push(nums[i])
    output.push(nums[j])
    i++
    j++
  }
  return output
}

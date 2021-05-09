/*
    Problem: Decompress Run-Length Encoded List (https://leetcode.com/problems/decompress-run-length-encoded-list/)

    # Array
    -> Time Complexity: O(nums[0] + nums[2] + ..,. + nums[2 n - 2]), where n = nums.length., Space Complexity: O(1)
*/

var decompressRLElist = function (nums) {
  let output = []
  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      output.push(nums[i + 1])
    }
  }
  return output
}

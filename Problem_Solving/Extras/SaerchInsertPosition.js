/*
    Problem: Search Insert Position (https://leetcode.com/problems/search-insert-position)

    < nums = [1,3,5,6], target = 5. Output: 2
    < nums = [1,3,5,6], target = 2. Output: 1
    < nums = [1,3,5,6], target = 7. Output: 4
    < nums = [1,3,5,6], target = 0. Output: 0

    # Use: Array
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var searchInsert = function (nums, target) {
  let position = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i

    if (target > nums[i]) {
      position = i + 1
    }
  }
  return position
}

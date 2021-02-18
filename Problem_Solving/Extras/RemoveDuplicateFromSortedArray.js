/*
    Problem: Remove Duplicates from Sorted Array (https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

    < [1,1,2], Output: 2, nums = [1,2]
    < [0,0,1,1,1,2,2,3,3,4], Output: 5, nums = [0,1,2,3,4]

    # Use: Array, HashTable (Map)
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

const nums = [0, 0, 1, 1, 1, 2, 2, 3https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j?si=293rKDTgS0y4DYKLw8j48Q, 3, 4]

function removeDuplicates(nums) {
  const n = nums.length
  if (n < 2) return n
  let i = 0
  for (let j = 1; j < n; j++) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}

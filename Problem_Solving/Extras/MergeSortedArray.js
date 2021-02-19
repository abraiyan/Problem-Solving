/*
    Problem: Merge Sorted Array (https://leetcode.com/problems/merge-sorted-array/)

    < Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 --> Output: [1,2,2,3,5,6]
    < Input: nums1 = [1], m = 1, nums2 = [], n = 0 --> Output: [1]

    # Use: Array
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n = 3

function merge(nums1, m, nums2, n) {
  let i1 = m - 1
  let i2 = n - 1
  let j = m + n - 1

  while (i1 >= 0 && i2 >= 0) {
    if (nums1[i1] > nums2[i2]) {
      nums1[j--] = nums1[i1--]
    } else {
      nums1[j--] = nums2[i2--]
    }
  }

  while (i2 >= 0) {
    nums1[j--] = nums2[i2--]
  }

  return nums1
}

merge(nums1, m, nums2, n)

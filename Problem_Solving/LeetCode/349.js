/*
    Problem: Intersection of Two Arrays (https://leetcode.com/problems/intersection-of-two-arrays/)
 
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var intersection = function (nums1, nums2) {
  const setOutput = new Set()
  const set = new Set()

  for (let i = 0; i < nums1.length; i++) {
    set.add(nums1[i])
  }

  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      setOutput.add(nums2[i])
    }
  }

  return Array.from(setOutput)
}

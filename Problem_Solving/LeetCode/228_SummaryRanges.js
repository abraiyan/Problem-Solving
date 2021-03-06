/*
    Problem: Summary Ranges (https://leetcode.com/problems/summary-ranges/)

    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var summaryRanges = function (nums) {
  let output = []
  if (nums.length === 0) return output

  let start = nums[0]
  let end = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === end + 1) {
      end++
    } else {
      if (start === end) {
        output.push(start.toString())
      } else {
        output.push(`${start}->${end}`)
      }
      start = nums[i]
      end = nums[i]
    }
  }

  if (start === end) {
    output.push(start.toString())
  } else {
    output.push(`${start}->${end}`)
  }

  return output
}

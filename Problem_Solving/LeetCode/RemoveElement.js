/*
    Problem: Remove Elements from Array (https://leetcode.com/problems/remove-element)

    < nums = [3,2,2,3], val = 3 --> 2(new length), nums = [2,2]
    < nums = [0,1,2,2,3,0,4,2], val = 2 --> 5(new length), nums = [0,1,4,0,3]

    # Use: Array, Two Pointer
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

const testCaseOne = [3, 2, 2, 3] //val = 3
const testCaseTwo = [0, 1, 2, 2, 3, 0, 4, 2] //val = 2

function removeElement(nums, val) {
  let n = nums.length
  let i = 0

  while (i < n) {
    if (nums[i] === val) {
      let temp = nums[i]
      nums[i] = nums[n - 1]
      nums[n - 1] = temp
      n--
    } else {
      i++
    }
  }
  return i
}

console.log(removeElement(testCaseTwo, 2))
console.log(testCaseTwo)

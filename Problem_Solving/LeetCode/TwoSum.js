/*
    Problem: https://leetcode.com/problems/two-sum/

    < [2, 7, 11, 15], Target Sum: 9 --> [0, 1]
    < [3, 2, 4], Target Sum: 6 --> [1, 2]

    # Use: Array, HashTable (Map)
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

const testCaseOne = [2, 7, 11, 15] //target: 9
const testCaseTwo = [3, 2, 4] //target: 6

function twoSum(nums, target) {
  const map = {}
  const n = nums.length

  for (let i = 0; i < n; i++) {
    const complement = target - nums[i]
    if (map[complement] !== undefined) {
      return [map[complement], i]
    }
    map[nums[i]] = i
  }
  return null
}

//console.log(twoSum(testCaseOne, 9))
//console.log(twoSum(testCaseTwo, 6))

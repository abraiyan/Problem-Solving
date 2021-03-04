/*
    Problem: Two Sum II - Input array is sorted (https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

    < Input: numbers = [2,7,11,15], target = 9
    < Output: [1,2]
    < Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

    # Array, Two Pointer
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var twoSum = function (numbers, target) {
  let i = 0
  let j = numbers.length - 1

  while (i < j) {
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1]
    } else if (numbers[i] + numbers[j] > target) {
      j--
    } else {
      i++
    }
  }
}

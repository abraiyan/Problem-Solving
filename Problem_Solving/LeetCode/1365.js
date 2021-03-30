/*
    Problem: How Many Numbers Are Smaller Than the Current Number (https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var smallerNumbersThanCurrent = function(nums) {
  let count = new Array(101).fill(0)
  let output = []

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++
  }

  for (let i = 1; i <= 100; i++) {
    count[i] += count[i - 1];
  }

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) output.push(0)
    else output.push(count[nums[i] - 1])
  }

  return output
};

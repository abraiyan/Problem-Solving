/*
    Problem: Kids With the Greatest Number of Candies (https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)
  
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var kidsWithCandies = function (candies, extraCandies) {
  let max = candies[0]
  let output = []

  for (let i = 1; i < candies.length; i++) {
    if (max < candies[i]) max = candies[i]
  }

  for (let i = 0; i < candies.length; i++) {
    output.push(candies[i] + extraCandies >= max)
  }

  return output
}

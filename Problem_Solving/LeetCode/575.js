/*
    Problem: Distribute Candies (https://leetcode.com/problems/distribute-candies/)

    
    # Set
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var distributeCandies = function (candyType) {
  const candies = new Set()

  for (let i = 0; i < candyType.length; i++) {
    candies.add(candyType[i])
  }

  return candyType.length / 2 < candies.size
    ? candyType.length / 2
    : candies.size
}

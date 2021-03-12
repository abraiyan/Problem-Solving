/*
    Problem: Find the Highest Altitude (https://leetcode.com/problems/find-the-highest-altitude/)
 
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var largestAltitude = function (gain) {
  let max = 0
  let current = 0

  for (let i = 0; i < gain.length; i++) {
    current = current + gain[i]
    if (current > max) max = current
  }

  return max
}

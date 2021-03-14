/*
    Problem: Slowest Key (https://leetcode.com/problems/slowest-key/)

    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var slowestKey = function (releaseTimes, keysPressed) {
  let output = keysPressed[0]
  let max = releaseTimes[0]

  for (let i = 1; i < keysPressed.length; i++) {
    let gap = releaseTimes[i] - releaseTimes[i - 1]

    if (gap > max) {
      max = gap
      output = keysPressed[i]
    }

    if (gap === max) {
      output = output > keysPressed[i] ? output : keysPressed[i]
    }
  }

  return output
}

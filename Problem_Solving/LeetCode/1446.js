/*
    Problem: Consecutive Characters (https://leetcode.com/problems/consecutive-characters/)
 
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var maxPower = function (s) {
  let maxPower = 0
  let currentPower = 1

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currentPower++
    } else {
      if (currentPower > maxPower) {
        maxPower = currentPower
      }
      currentPower = 1
    }
  }

  return currentPower > maxPower ? currentPower : maxPower
}

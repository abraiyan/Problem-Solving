/*
    Problem: Slowest Key (https://leetcode.com/problems/slowest-key/)

    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var slowestKey = function (releaseTimes, keysPressed) {
  const map = new Map()
  map.set(keysPressed[0], releaseTimes[0])

  let output = keysPressed[0]

  for (let i = 1; i < keysPressed.length; i++) {
    let gap = releaseTimes[i] - releaseTimes[i - 1]
    if (map.has(keysPressed[i])) {
      if (map.get(keysPressed[i]) < gap) {
        map.set(keysPressed[i], gap)
      }
    } else {
      map.set(keysPressed[i], gap)
    }

    if (map.get(keysPressed[i]) > map.get(output)) {
      output = keysPressed[i]
    }

    if (map.get(keysPressed[i]) === map.get(output)) {
      output = keysPressed[i] > output ? keysPressed[i] : output
    }
  }

  return output
}

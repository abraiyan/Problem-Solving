/*
    Problem: Maximum Number of Balloons (https://leetcode.com/problems/maximum-number-of-balloons/)
*/

var maxNumberOfBalloons = function (text) {
  let map = new Map()
  let output = 0
  map.set('b', 0)
  map.set('a', 0)
  map.set('l', 0)
  map.set('o', 0)
  map.set('n', 0)

  for (const s of text) {
    if (map.has(s)) {
      map.set(s, map.get(s) + 1)
    }
  }

  let range = map.get('b')

  for (let i = 0; i < range; i++) {
    let temp = 0
    for (const key of map.keys()) {
      switch (key) {
        case 'l':
          if (map.get(key) >= 2) {
            temp += 2
            map.set(key, map.get(key) - 2)
          }
          break
        case 'o':
          if (map.get(key) >= 2) {
            temp += 2
            map.set(key, map.get(key) - 2)
          }
          break
        default:
          if (map.get(key) >= 1) {
            temp += 1
            map.set(key, map.get(key) - 1)
          }
      }
    }

    if (temp === 7) output++
  }

  return output
}

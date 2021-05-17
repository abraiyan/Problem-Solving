/*
    Problem: Find Common Characters (https://leetcode.com/problems/find-common-characters/)

*/

var commonChars = function (words) {
  let map = new Map()
  let tempMap = new Map()

  for (const s of words[0]) {
    if (map.has(s)) {
      map.set(s, map.get(s) + 1)
    } else {
      map.set(s, 1)
    }
  }

  for (let i = 1; i < words.length; i++) {
    for (const s of words[i]) {
      if (map.has(s) && map.get(s) > 0) {
        map.set(s, map.get(s) - 1)
        if (tempMap.has(s)) {
          tempMap.set(s, tempMap.get(s) + 1)
        } else {
          tempMap.set(s, 1)
        }
      }
    }
    map = tempMap
    tempMap = new Map()
  }

  let output = []

  for (const key of map.keys()) {
    if (map.get(key) > 0) {
      for (let i = 0; i < map.get(key); i++) {
        output.push(key)
      }
    }
  }

  return output
}

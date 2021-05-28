/*
    Problem: Uncommon Words from Two Sentences (https://leetcode.com/problems/uncommon-words-from-two-sentences/)
*/

var uncommonFromSentences = function (s1, s2) {
  let output = []
  const map = new Map()

  for (const s of [...s1.split(' '), ...s2.split(' ')]) {
    map.set(s, map.has(s) ? map.get(s) + 1 : 1)
  }

  for (const key of map.keys()) {
    if (map.get(key) === 1) {
      output.push(key)
    }
  }

  return output
}

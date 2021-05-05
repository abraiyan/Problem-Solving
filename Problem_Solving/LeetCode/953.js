/*
    Problem: Verifying an Alien Dictionary (https://leetcode.com/problems/verifying-an-alien-dictionary/)

    # HashMap
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var isAlienSorted = function (words, order) {
  let map = new Map()
  for (let i = 0; i <= 25; i++) {
    map.set(order[i], i + 1)
  }

  if (words.length <= 1) return true

  for (let i = 0; i < words.length - 1; i++) {
    let output = helper(words[i], words[i + 1], map)
    if (!output) return false
  }
  return true
}

var helper = function (wordOne, wordTwo, order) {
  if (order.get(wordOne[0]) < order.get(wordTwo[0])) return true

  let n = Math.max(wordOne.length, wordTwo.length)
  for (let i = 0; i < n; i++) {
    if (order.get(wordOne[i]) > order.get(wordTwo[i])) return false
    if (
      wordTwo[i] === undefined &&
      order.get(wordOne[i - 1]) >= order.get(wordTwo[i - 1])
    )
      return false
  }
  return true
}

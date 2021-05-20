/*
    Problem: Number of Equivalent Domino Pairs (https://leetcode.com/problems/number-of-equivalent-domino-pairs/)
*/

var numEquivDominoPairs = function (dominoes) {
  let map = new Map()
  let output = 0

  for (const n of dominoes) {
    let min = Math.min(n[0], n[1])
    let max = Math.max(n[0], n[1])
    let number = min * 10 + max
    let pairs = map.has(number) ? map.get(number) : 0
    output += pairs
    map.set(number, pairs + 1)
  }

  return output
}

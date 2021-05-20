/*
    Problem: X of a Kind in a Deck of Cards (https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/)
*/

function helper(x, y) {
  return x == 0 ? y : helper(y % x, x)
}

var hasGroupsSizeX = function (deck) {
  if (deck.length <= 1) return false
  let map = new Map()

  for (const n of deck) {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1)
  }

  let gcd = null

  for (const key of map.keys()) {
    if (gcd === null) {
      gcd = map.get(key)
    } else {
      gcd = helper(gcd, map.get(key))
    }
  }

  return gcd >= 2
}

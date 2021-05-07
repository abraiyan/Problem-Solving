/*
    Problem: Jewels and Stones  (https://leetcode.com/problems/jewels-and-stones/)

    # Set
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var numJewelsInStones = function (jewels, stones) {
  const set = new Set()
  let output = 0

  for (const s of jewels) {
    set.add(s)
  }

  for (const s of stones) {
    if (set.has(s)) output++
  }

  return output
}

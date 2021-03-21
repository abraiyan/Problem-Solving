/*
    Problem: Number of Good Pairs (https://leetcode.com/problems/number-of-good-pairs/)
  
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var numIdenticalPairs = function (nums) {
  let output = 0
  const map = new Map()

  for (const n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1)
    } else {
      map.set(n, 1)
    }

    output += map.get(n) - 1
    console.log(output)
  }

  console.log(map)

  return output
}

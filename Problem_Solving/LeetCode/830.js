/*
    Problem: Positions of Large Groups (https://leetcode.com/problems/positions-of-large-groups/)
*/

var largeGroupPositions = function (s) {
  let output = []
  let start = 0,
    end = 0
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      end = i
      if (end !== s.length - 1) {
        continue
      }
    }
    if (end - start + 1 >= 3) {
      output.push([start, end])
    }
    start = i
    end = i
  }
  return output
}

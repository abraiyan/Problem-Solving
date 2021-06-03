/*
    Problem: Most Visited Sector in a Circular Track (https://leetcode.com/problems/most-visited-sector-in-a-circular-track/)
*/

var mostVisited = function (n, rounds) {
  let output = []
  let start = rounds[0]
  let end = rounds[rounds.length - 1]

  if (start <= end) {
    for (let i = start; i <= end; i++) {
      output.push(i)
    }
  } else {
    for (let i = 1; i <= end; i++) {
      output.push(i)
    }

    for (let i = start; i <= n; i++) {
      output.push(i)
    }
  }

  return output
}

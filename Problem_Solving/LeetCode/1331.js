/*
    Problem: Rank Transform of an Array (https://leetcode.com/problems/rank-transform-of-an-array/)
*/

var arrayRankTransform = function (arr) {
  let tempArray = [...arr]
  const map = new Map()
  tempArray.sort((a, b) => a - b)
  let output = []
  let counter = 1

  for (let i = 0; i < tempArray.length; i++) {
    if (map.has(tempArray[i])) {
      continue
    }

    map.set(tempArray[i], counter)
    counter++
  }

  for (const n of arr) {
    output.push(map.get(n))
  }

  return output
}

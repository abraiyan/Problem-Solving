/*
    Problem: Minimum Index Sum of Two Lists (https://leetcode.com/problems/minimum-index-sum-of-two-lists/)

    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var findRestaurant = function (list1, list2) {
  const mapOne = new Map()
  let output = []
  let currentgap = 100000

  for (let i = 0; i < list1.length; i++) {
    mapOne.set(list1[i], i)
  }

  for (let i = 0; i < list2.length; i++) {
    if (mapOne.has(list2[i])) {
      if (mapOne.get(list2[i]) + i > currentgap) {
        continue
      } else if (mapOne.get(list2[i]) + i === currentgap) {
        output.push(list2[i])
      } else {
        output = []
        output.push(list2[i])
        currentgap = mapOne.get(list2[i]) + i
      }
    }
  }

  return output
}

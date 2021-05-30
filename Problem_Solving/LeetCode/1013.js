/*
    Problem: Partition Array Into Three Parts With Equal Sum (https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/)
*/

var canThreePartsEqualSum = function (arr) {
  let total = 0

  for (const n of arr) {
    total += n
  }

  total = total / 3
  let tempTotal = 0
  let groupCount = 0

  for (let i = 0; i < arr.length; i++) {
    tempTotal += arr[i]
    if (tempTotal === total) {
      tempTotal = 0
      groupCount++
    }
  }

  return groupCount >= 3
}

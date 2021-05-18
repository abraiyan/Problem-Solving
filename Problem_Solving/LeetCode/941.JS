/*
    Problem: Valid Mountain Array (https://leetcode.com/problems/valid-mountain-array/)

*/

var validMountainArray = function (arr) {
  if (arr.length <= 2 || arr[1] < arr[0]) return false

  let mark
  let inSecondLopp = false

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      mark = i + 1
      continue
    }
    break
  }

  for (let i = mark; i < arr.length - 1; i++) {
    inSecondLopp = true
    if (arr[i + 1] < arr[i]) {
      mark = i + 1
      continue
    }
    break
  }

  return mark === arr.length - 1 && inSecondLopp
}

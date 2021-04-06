/*
    Problem: Duplicate Zeros (https://leetcode.com/problems/duplicate-zeros/)

    # Array
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var duplicateZeros = function (arr) {
  let possibleDups = 0
  let n = arr.length - 1

  for (let i = 0; i <= n - possibleDups; i++) {
    if (arr[i] == 0) {
      if (i === n - possibleDups) {
        arr[n] = 0
        n--
        break
      }

      possibleDups++
    }
  }

  n = n - possibleDups

  for (let i = n; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + possibleDups--] = 0
      arr[i + possibleDups] = 0
    } else {
      arr[i + possibleDups] = arr[i]
    }
  }

  return null
}

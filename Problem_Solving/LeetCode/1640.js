/*
    Problem: Check Array Formation Through Concatenation (https://leetcode.com/problems/check-array-formation-through-concatenation/)
 
*/

var canFormArray = function (arr, pieces) {
  const map = new Map()

  for (let i = 0; i < pieces.length; i++) {
    map.set(pieces[i][0], pieces[i])
  }

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      let temp = map.get(arr[i])
      for (let j = 0; j < temp.length; j++) {
        if (temp[j] !== arr[i + j]) {
          return false
        }
      }
      i += temp.length - 1
    } else {
      return false
    }
  }

  return true
}

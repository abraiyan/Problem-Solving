/*
    Problem: Replace Elements with Greatest Element on Right Side (https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/)
*/

var replaceElements = function (arr) {
  let max = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i]
    arr[i] = max
    max = Math.max(max, temp)
  }
  
  return arr
}

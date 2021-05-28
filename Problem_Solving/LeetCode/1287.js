/*
    Problem: Element Appearing More Than 25% In Sorted Array (https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/)
*/

var findSpecialInteger = function (arr) {
  let count = 1
  let mostFreq = arr[0]
  let tempCount = 1
  let tempFreq = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === tempFreq) {
      tempCount++
    } else {
      if (tempCount > count) {
        count = tempCount
        mostFreq = tempFreq
      }
      tempCount = 1
      tempFreq = arr[i]
    }
  }

  mostFreq = tempCount > count ? tempFreq : mostFreq

  return mostFreq
}

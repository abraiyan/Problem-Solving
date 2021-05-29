/*
    Problem: Replace Elements with Greatest Element on Right Side (https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/)
*/

var countCharacters = function (words, chars) {
  const map = new Map()

  for (const s of chars) {
    map.set(s, map.has(s) ? map.get(s) + 1 : 1)
  }

  let totalLength = 0

  for (const word of words) {
    let isValid = true
    let tempMap = new Map(map)
    for (const s of word) {
      if (tempMap.get(s) > 0) {
        tempMap.set(s, tempMap.get(s) - 1)
      } else {
        isValid = false
        break
      }
    }
    if (isValid) totalLength += word.length
  }

  return totalLength
}

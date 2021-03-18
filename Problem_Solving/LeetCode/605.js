/*
    Problem: Can Place Flowers (https://leetcode.com/problems/can-place-flowers/)
 
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var canPlaceFlowers = function (flowerbed, n) {
  let counter = 0

  if (flowerbed.length === 1 && flowerbed[0] === 0) return true

  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      counter++
      i++
      continue
    }

    if (
      i === flowerbed.length - 1 &&
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0
    ) {
      counter++
      break
    }

    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      counter++
      i++
    }
  }

  return counter >= n
}

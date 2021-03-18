/*
    Problem: Can Place Flowers (https://leetcode.com/problems/can-place-flowers/)
 
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var canPlaceFlowers = function (flowerbed, n) {
  let counter = 0

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      counter++
      i++
    }
  }

  return counter >= n
}

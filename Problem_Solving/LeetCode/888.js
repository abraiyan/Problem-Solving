/*
    Problem: Fair Candy Swap (https://leetcode.com/problems/fair-candy-swap/)

    # Set
    -> Time Complexity: O(n), Space Complexity: O(B.length)
*/

var fairCandySwap = function (A, B) {
  let setB = new Set(B)
  let totalOfA = 0,
    totalOfB = 0

  A.forEach((item) => (totalOfA += item))
  B.forEach((item) => (totalOfB += item))

  let gap = (totalOfB - totalOfA) / 2

  for (const n of A) {
    if (setB.has(n + gap)) {
      return [n, n + gap]
    }
  }

  return null
}

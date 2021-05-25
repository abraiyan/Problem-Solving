/*
    Problem: Three Consecutive Odds (https://leetcode.com/problems/three-consecutive-odds/)
*/

var threeConsecutiveOdds = function (arr) {
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i - 1] % 2 !== 0 && arr[i - 2] % 2 !== 0) {
      return true
    }
  }

  return false
}

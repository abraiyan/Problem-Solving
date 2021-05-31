/*
    Problem: Teemo Attacking (https://leetcode.com/problems/teemo-attacking/)
*/

var findPoisonedDuration = function (timeSeries, duration) {
  let totalTime = duration

  for (let i = 0; i < timeSeries.length - 1; i++) {
    if (timeSeries[i + 1] - timeSeries[i] < duration) {
      totalTime += timeSeries[i + 1] - timeSeries[i]
    } else {
      totalTime += duration
    }
  }

  return totalTime
}

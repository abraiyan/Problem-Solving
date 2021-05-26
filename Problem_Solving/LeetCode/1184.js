/*
    Problem: Distance Between Bus Stops (https://leetcode.com/problems/distance-between-bus-stops/)
*/

var distanceBetweenBusStops = function (distance, start, destination) {
  let n = distance.length
  let array = new Array(n + 1).fill(0)
  if (start > destination) {
    let temp = start
    start = destination
    destination = temp
  }

  for (let i = 0; i < n; i++) {
    array[i + 1] = distance[i] + array[i]
  }

  let cw = array[destination] - array[start]
  let acw = array[n] - cw
  return cw < acw ? cw : acw
}

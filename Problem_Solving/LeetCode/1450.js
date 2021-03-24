/*
    Problem: Number of Students Doing Homework at a Given Time (https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/)
  
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var busyStudent = function (startTime, endTime, queryTime) {
  let output = 0

  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      output++
    }
  }

  return output
}

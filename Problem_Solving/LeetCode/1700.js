/*
    Problem: Number of Students Unable to Eat Lunch (https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/)
 
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var countStudents = function (students, sandwiches) {
  let circular = 0
  let square = 0

  for (let i = 0; i < students.length; i++) {
    if (students[i] === 0) circular++
    else square++
  }

  for (let i = 0; i < sandwiches.length; i++) {
    if (sandwiches[i] === 0) {
      if (circular === 0) break
      circular--
    } else {
      if (square === 0) break
      square--
    }
  }
  return circular + square
}

/*
    Problem: 118. Pascal's Triangle (https://leetcode.com/problems/pascals-triangle/)

    < Input: numRows = 5
    < Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

    # Use: Array
    -> Time Complexity: O(n^2), Space Complexity: O(n^2)
*/

var generate = function (numRows) {
  const output = [[1]]
  if (numRows === 1) return output

  for (let i = 2; i <= numRows; i++) {
    const array = new Array(i).fill(1)
    const temp = output[i - 2]
    for (let j = 1; j < temp.length; j++) {
      array[j] = temp[j - 1] + temp[j]
    }
    output.push(array)
  }

  return output
}

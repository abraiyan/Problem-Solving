/*
    Problem: Sum of Even Numbers After Queries (https://leetcode.com/problems/sum-of-even-numbers-after-queries/)
    
    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var sumEvenAfterQueries = function (A, queries) {
  let output = []
  let currentSum = 0
  A.map((item) => (currentSum += item % 2 === 0 ? item : 0))

  for (let i = 0; i < queries.length; i++) {
    let index = queries[i][1]
    let value = queries[i][0]
    if (A[index] % 2 === 0) currentSum -= A[index]
    A[index] += value
    if (A[index] % 2 === 0) currentSum += A[index]
    output.push(currentSum)
  }
  return output
}

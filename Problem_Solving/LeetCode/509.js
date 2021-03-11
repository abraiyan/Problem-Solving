/*
    Problem: Fibonacci Number (https://leetcode.com/problems/fibonacci-number/)
 
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var fib = function (n) {
  const array = [0, 1, 1]

  if (n < 2) {
    return array[n]
  }

  for (let i = 3; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2]
  }
  return array[n]
}

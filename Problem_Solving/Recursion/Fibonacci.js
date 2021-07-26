/*
    Problem: Fibonacci with Memoization

    < 10 --> 55
    < 5 --> 5

    # Use: Recursion, Dynamic Programming, Bottom Up
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

function fibonacciDynamic(memory, n) {
  if (n === 0) return 0

  let result
  if (memory[n]) {
    return memory[n]
  }

  if (n === 1 || n === 2) {
    result = 1
  } else {
    result = fibonacciDynamic(memory, n - 1) + fibonacciDynamic(memory, n - 2)
  }

  memory[n] = result
  return result
}

function fibonacciBottomUp(n) {
  // start from 0 so the array looks like [1, 1, 2, 3, 5, 8, ...]
  if (n === 0) return 0

  if (n === 1 || n === 2) {
    return 1
  }

  const array = [0, 1, 1]

  for (let i = 3; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2]
  }
  return array[n]
}

console.log(fibonacciDynamic([], 10)) // Expected Output: 55
console.log(fibonacciBottomUp(9)) // Expected Output: 55

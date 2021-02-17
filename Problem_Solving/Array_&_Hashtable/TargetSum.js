/*
    Problem: Target Sum from an Array (Pair)
    < [1, 2, 3, 9], Target Sum: 8 --> false (No pair found)
    < [1, 2, 4, 4], Target Sum: 8 --> true (4 and 4 add up to 8) 

    # Use: Array, Set
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

const testCaseOne = [1, 2, 3, 9] //target: 8
const testCaseTwo = [1, 2, 4, 4] //target: 8
const testCaseThree = [1, 2, 6, 8] //target: 8

function hasPairWithSum(array, target) {
  const complements = new Set()
  const n = array.length

  for (let i = 0; i < n; i++) {
    const comp = target - array[i]
    if (complements.has(array[i])) {
      return true
    }
    complements.add(comp)
  }
  return false
}

console.log(hasPairWithSum(testCaseThree, 8))

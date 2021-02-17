/*
    Problem: First Recurring Character in a String
    < 'ABCA' --> 'A'
    < 'BCABA' --> 'B'
    < 'ABC' --> null

    # Use: Array, HashTable
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

const testCaseOne = 'ABCA'
const testCaseTwo = 'BCABA'
const testCaseThree = 'ABC'

function firstRecurringCharacter(string) {
  const map = {} //You can use Map or Hashtable here in other language
  const n = string.length
  for (let i = 0; i < n; i++) {
    if (map[string[i]]) {
      return string[i]
    }
    map[string[i]] = 1
  }
  return null
}

console.log(firstRecurringCharacter(testCaseTwo))

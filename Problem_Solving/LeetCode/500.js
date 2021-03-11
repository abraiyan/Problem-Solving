/*
    Problem: Keyboard Row (https://leetcode.com/problems/keyboard-row/)
 
    -> Time Complexity: O(n), Space Complexity: O(n)
*/

var findWords = function (words) {
  const firstRow = new Set('qwertyuiop')
  const secondRow = new Set('asdfghjkl')
  const thirdRow = new Set('zxcvbnm')
  let output = []

  for (let i = 0; i < words.length; i++) {
    let temp = words[i].toLowerCase()
    let inFirstRow = false
    let inSecondRow = false
    let inThirdRow = false
    for (let j = 0; j < temp.length; j++) {
      if (firstRow.has(temp[j])) {
        inFirstRow = true
      }

      if (secondRow.has(temp[j])) {
        inSecondRow = true
      }

      if (thirdRow.has(temp[j])) {
        inThirdRow = true
      }
    }

    if (inFirstRow && !inSecondRow && !inThirdRow) {
      output.push(words[i])
    } else if (!inFirstRow && inSecondRow && !inThirdRow) {
      output.push(words[i])
    } else if (!inFirstRow && !inSecondRow && inThirdRow) {
      output.push(words[i])
    }
  }

  return output
}

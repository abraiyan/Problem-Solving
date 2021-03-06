/*
    Problem: Count Items Matching a Rule (https://leetcode.com/problems/count-items-matching-a-rule/)

    -> Time Complexity: O(n), Space Complexity: O(1)
*/

var countMatches = function (items, ruleKey, ruleValue) {
  let category
  if (ruleKey === 'type') category = 0
  else if (ruleKey === 'color') category = 1
  else category = 2

  let output = 0

  for (let i = 0; i < items.length; i++) {
    if (items[i][category] === ruleValue) {
      output++
    }
  }

  return output
}

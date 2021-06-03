/*
    Problem: Longest Word in Dictionary (https://leetcode.com/problems/longest-word-in-dictionary/)
*/

var longestWord = function (words) {
  let output = ''
  let set = new Set(words)

  for (let i = 0; i < words.length; i++) {
    if (
      words[i].length > output.length ||
      (words[i].length === output.length && words[i] < output)
    ) {
      let isValid = true
      for (let j = 1; j < words[i].length; j++) {
        if (!set.has(words[i].substring(0, j))) {
          isValid = false
          break
        }
      }

      if (isValid) output = words[i]
    }
  }

  return output
}

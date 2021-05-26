/*
    Problem: Occurrences After Bigram (https://leetcode.com/problems/occurrences-after-bigram/)
*/

var findOcurrences = function (text, first, second) {
  let output = []
  let words = text.split(' ')
  for (let i = 2; i < words.length; i++) {
    if (words[i - 1] === second && words[i - 2] === first) {
      output.push(words[i])
    }
  }
  return output
}

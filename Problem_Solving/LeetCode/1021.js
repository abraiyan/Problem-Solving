var removeOuterParentheses = function (s) {
  let output = ''
  let size = 0

  for (const c of s) {
    if (c == '(') {
      if (size > 0) output += c
      size++
    } else {
      size--
      if (size > 0) output += c
    }
  }

  return output
}

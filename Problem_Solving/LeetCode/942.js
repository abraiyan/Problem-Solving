var diStringMatch = function (s) {
  let output = []
  let up = s.length
  let down = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      output[i] = down++
    } else {
      output[i] = up--
    }
  }

  if (s[s.length] === 'I') {
    output.push(up)
  } else {
    output.push(down)
  }

  return output
}

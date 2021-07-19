var maximum69Number = function (num) {
  let temp = num
  let j = -1
  for (let i = 0; temp > 0; i++) {
    if (temp % 10 === 6) {
      j = i
    }

    temp = parseInt(temp / 10)
  }

  return num + 3 * parseInt(Math.pow(10, j))
}

var hasAlternatingBits = function (n) {
  let lastbit = n & 1
  let i = 1

  while (n !== 0) {
    n = n >> i
    if (lastbit === (n & 1)) {
      return false
    }

    lastbit = n & 1
  }

  return true
}

var hammingWeight = function (n) {
  let counter = 0
  while (n !== 0) {
    counter++
    n = n & (n - 1)
  }

  return counter
}

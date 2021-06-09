var hammingDistance = function (x, y) {
  let a = x ^ y
  let count = 0
  while (a > 0) {
    a = a & (a - 1)
    count++
  }

  return count
}

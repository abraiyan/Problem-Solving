var countTriplets = function (arr) {
  let ans = 0
  for (let i = 0; i < arr.length; i++) {
    let xor = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      console.log(xor, arr[j], xor ^ arr[j])
      xor = xor ^ arr[j]
      if (xor === 0) {
        ans += j - i
      }
    }
  }

  return ans
}

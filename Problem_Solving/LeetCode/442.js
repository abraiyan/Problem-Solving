var findDuplicates = function (nums) {
  let output = []

  for (const n of nums) {
    if (nums[Math.abs(n) - 1] < 0) {
      output.push(Math.abs(n))
    } else {
      nums[Math.abs(n) - 1] = nums[Math.abs(n) - 1] * -1
    }
  }

  return output
}

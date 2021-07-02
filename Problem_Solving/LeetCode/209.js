var minSubArrayLen = function (target, nums) {
  let i = 0
  let j = 0
  let total = 0
  let output = Number.MAX_VALUE

  while (j !== nums.length) {
    total += nums[j]
    while (total >= target) {
      output = Math.min(output, j - i + 1)
      total -= nums[i++]
    }

    j++
  }

  return output === Number.MAX_VALUE ? 0 : output
}

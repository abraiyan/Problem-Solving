var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = Math.abs(nums[i])
    if (nums[j] > 0) {
      nums[j] *= -1
    } else {
      return j
    }
  }

  return -1
}

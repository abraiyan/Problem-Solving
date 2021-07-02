var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0
  let i = 0
  let j = 0
  let ans = 1
  let set = new Set()

  while (j !== s.length) {
    while (set.has(s[j])) {
      set.delete(s[i++])
    }

    set.add(s[j])
    ans = Math.max(ans, j - i + 1)
    j++
  }

  return ans
}

var findAndReplacePattern = function (words, pattern) {
  let output = []
  let key = keyMaker(pattern)

  for (const s of words) {
    if (keyMaker(s) === key) {
      output.push(s)
    }
  }

  return output
}

var keyMaker = function (word) {
  let map = new Map()
  let counter = 1
  let result = ''
  for (const s of word) {
    if (map.has(s)) {
      map.set(s, map.get(s) + 10)
      result += map.get(s)
    } else {
      map.set(s, counter)
      result += counter
      counter++
    }
  }

  return result
}

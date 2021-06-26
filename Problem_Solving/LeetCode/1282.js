var groupThePeople = function (groupSizes) {
  let map = new Map()
  for (let i = 0; i < groupSizes.length; i++) {
    if (map.has(groupSizes[i])) {
      map.set(groupSizes[i], [...map.get(groupSizes[i]), i])
    } else {
      map.set(groupSizes[i], [i])
    }
  }

  let output = []
  for (const key of map.keys()) {
    if (key === map.get(key).length) {
      output.push(map.get(key))
    } else {
      let size = map.get(key).length
      let start = 0
      let end = start + key
      let interval = size / key
      for (let i = 0; i < interval; i++) {
        output.push(map.get(key).slice(start, end))
        start = end
        end = end + key
      }
    }
  }

  return output
}

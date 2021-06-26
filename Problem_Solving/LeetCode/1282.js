var groupThePeople = function (groupSizes) {
  let map = new Map()
  let output = []

  for (let i = 0; i < groupSizes.length; i++) {
    let n = groupSizes[i]
    if (map.has(n)) {
      map.set(n, [...map.get(n), i])
    } else {
      map.set(n, [i])
    }

    if (n === map.get(n).length) {
      output.push(map.get(n))
      map.set(n, [])
    }
  }

  return output
}

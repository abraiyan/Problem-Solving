var findingUsersActiveMinutes = function (logs, k) {
  let map = new Map()

  for (const n of logs) {
    if (map.has(n[0])) {
      map.set(n[0], map.get(n[0]).add(n[1]))
    } else {
      map.set(n[0], new Set([n[1]]))
    }
  }

  let output = new Array(k).fill(0)
  for (const key of map.keys()) {
    output[map.get(key).size - 1]++
  }

  return output
}

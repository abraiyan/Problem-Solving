var displayTable = function (orders) {
  let foodsSortedArray = []
  for (const n of orders) {
    foodsSortedArray.push(n[2])
  }

  foodsSortedArray.sort(function (a, b) {
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  })

  let counter = 1
  let foodMap = new Map()
  for (const n of foodsSortedArray) {
    if (!foodMap.has(n)) {
      foodMap.set(n, counter++)
    }
  }

  let tableMap = new Map()
  for (const n of orders) {
    if (tableMap.has(n[1])) {
      let array = tableMap.get(n[1])
      let temp = array[foodMap.get(n[2])]++
      array[foodMap.get(n[2])] = array[foodMap.get(n[2])] + ''
      tableMap.set(n[1], array)
    } else {
      tableMap.set(n[1], new Array(counter).fill('0'))
      let array = tableMap.get(n[1])
      let temp = array[foodMap.get(n[2])]++
      array[foodMap.get(n[2])] = array[foodMap.get(n[2])] + ''
      array[0] = n[1]
      tableMap.set(n[1], array)
    }
  }

  let tablesSorted = []
  for (const key of tableMap.keys()) {
    tablesSorted.push(key)
  }
  tablesSorted.sort((a, b) => a - b)

  let output = []
  let firstRow = ['Table']
  for (const key of foodMap.keys()) {
    firstRow.push(key)
  }

  output.push(firstRow)
  for (const n of tablesSorted) {
    output.push(tableMap.get(n))
  }

  return output
}

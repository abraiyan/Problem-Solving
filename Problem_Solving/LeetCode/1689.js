var minPartitions = function (n) {
  let highest = -1
  for (let current of n) {
    let number = parseInt(current)
    if (number > highest) highest = number
  }

  return highest
}

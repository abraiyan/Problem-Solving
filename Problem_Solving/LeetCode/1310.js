var xorQueries = function (arr, queries) {
  let output = []
  let prefixXOR = [arr[0]]

  for (let i = 1; i < arr.length; i++) {
    prefixXOR[i] = prefixXOR[i - 1] ^ arr[i]
  }

  for (let i = 0; i < queries.length; i++) {
    let left = queries[i][0]
    let right = queries[i][1]
    if (left === 0) output.push(prefixXOR[right])
    else output.push(prefixXOR[right] ^ prefixXOR[left - 1])
  }

  return output
}

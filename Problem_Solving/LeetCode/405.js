var toHex = function (n) {
  if (n === 0) return '0'
  let hexaMap = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]
  let result = ''

  while (n !== 0) {
    result = hexaMap[n & 15] + result
    n = n >>> 4
  }

  return result
}

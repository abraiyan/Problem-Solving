var getDecimalValue = function (head) {
  let s = '' + head.val
  while (head.next !== null) {
    head = head.next
    s += head.val
  }

  return parseInt(s, 2)
}

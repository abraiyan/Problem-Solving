var hasCycle = function (head) {
  let counter = 0
  while (head !== null) {
    if (counter > 10000) return true
    head = head.next
    counter++
  }

  return false
}

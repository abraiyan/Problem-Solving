var flatten = function (head) {
  let nextNodes = []
  let temp = head

  while (temp !== null) {
    if (temp.child !== null) {
      if (temp.next !== null) nextNodes.push(temp.next)
      temp.next = temp.child
      temp.child.prev = temp
      temp.child = null
    }

    if (temp.next === null && nextNodes.length !== 0) {
      let previous = temp
      temp.next = nextNodes.pop()
      temp.next.prev = previous
    }

    temp = temp.next
  }

  return head
}

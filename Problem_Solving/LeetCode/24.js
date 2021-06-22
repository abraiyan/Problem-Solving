var swapPairs = function (head) {
  let node = new ListNode(0)
  node.next = head
  let tail = node

  while (head && head.next) {
    let jump = head.next.next

    tail.next = head.next
    tail.next.next = head

    tail = tail.next.next
    head = jump
  }

  tail.next = head
  return node.next
}

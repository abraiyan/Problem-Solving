var removeElements = function (head, val) {
  if (head === null) return null
  let temp = head
  while (temp.next !== null) {
    if (temp.next.val === val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }

  return head.val === val ? head.next : head
}

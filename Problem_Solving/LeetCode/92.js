var reverseBetween = function (head, left, right) {
  if (head.next === null) return head

  let counter = 1
  let temp = head
  let tempHead = null,
    newHead,
    newTail = null,
    jump

  while (temp !== null) {
    if (counter === left - 1) {
      tempHead = temp
    }

    if (counter === left) {
      newHead = null
      for (let i = 0; i <= right - left; i++) {
        jump = temp.next
        temp.next = newHead
        newHead = temp
        temp = jump
        if (newTail === null) newTail = newHead
      }
      if (tempHead === null) {
        head = newHead
      } else {
        tempHead.next = newHead
      }
      newTail.next = jump
      break
    }

    temp = temp.next
    counter++
  }

  return head
}

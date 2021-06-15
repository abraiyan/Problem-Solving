var deleteDuplicates = function (head) {
  if (head === null) return head
  let temp = head
  while (temp.next != null) {
    if (temp.val === temp.next.val) {
      temp.next = temp.next.next
      continue
    }
    temp = temp.next
  }

  return head
}

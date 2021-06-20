var swapNodes = function (head, k) {
  let A = null
  let B = null

  for (let i = head; i !== null; i = i.next) {
    B = B == null ? null : B.next
    if (--k === 0) {
      A = i
      B = head
    }
  }

  let tempValueA = A.val
  A.val = B.val
  B.val = tempValueA

  return head
}

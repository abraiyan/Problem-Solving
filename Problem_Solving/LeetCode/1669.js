var mergeInBetween = function (list1, a, b, list2) {
  let headA = list1
  let headB = list2
  let counterOne = 0
  let counterTwo = 0
  let start = null,
    end = null

  while (headA !== null) {
    if (counterOne === a - 1) start = headA
    if (counterTwo === b + 1) {
      end = headA
      break
    }
    counterOne++
    counterTwo++
    headA = headA.next
  }

  start.next = headB
  while (headB.next !== null) {
    headB = headB.next
  }
  headB.next = end

  return list1
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(-101)
  let tail = head

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      tail.next = l1
      l1 = l1.next
    } else {
      tail.next = l2
      l2 = l2.next
    }
    tail = tail.next
  }

  if (l1 !== null) {
    tail.next = l1
  }

  if (l2 !== null) {
    tail.next = l2
  }

  return head.next
}

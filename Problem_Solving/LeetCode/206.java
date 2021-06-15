class Solution141 {
    public ListNode reverseList(ListNode head) {
        ListNode previousNode = null;

        while (head != null) {
            ListNode temp = head.next;
            head.next = previousNode;
            previousNode = head;
            head = temp;
        }

        return previousNode;
    }
}
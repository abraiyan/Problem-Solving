class Solution234 {
    public boolean isPalindrome(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        if (fast != null)
            slow = slow.next;

        slow = reverseLinkedList(slow);
        fast = head;

        while (slow != null) {
            if (fast.val != slow.val) {
                return false;
            }

            slow = slow.next;
            fast = fast.next;
        }

        return true;
    }

    public ListNode reverseLinkedList(ListNode head) {
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
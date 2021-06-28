class Solution {

    private ListNode head;
    
    public Solution(ListNode head) {
        this.head = head;
    }
    
    /** Returns a random node's value. */
    public int getRandom() {
        int size = 1;
        int output = 0;
        ListNode temp = head;
        
        while(temp != null) {
            if(Math.random() < (1.0 / size)) {
                output = temp.val;
            }
            
            size++;
            temp = temp.next;
        }
        
        return output;
    }
}
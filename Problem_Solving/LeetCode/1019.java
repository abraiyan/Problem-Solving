class Solution {
    public int[] nextLargerNodes(ListNode head) {
        ArrayList<Integer> list = new ArrayList<>();
        for (ListNode node = head; node != null; node = node.next) {
            list.add(node.val);
        }

        int[] ans = new int[list.size()];
        Stack<Integer> s = new Stack<>();

        for (int i = ans.length - 1; i >= 0; i--) {
            while (!s.isEmpty() && s.peek() <= list.get(i)) {
                s.pop();
            }
            ans[i] = s.isEmpty() ? 0 : s.peek();
            s.push(list.get(i));
        }

        return ans;
    }
}
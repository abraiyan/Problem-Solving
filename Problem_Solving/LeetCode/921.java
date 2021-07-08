class Solution {
    public int minAddToMakeValid(String s) {
        Stack<Character> stack = new Stack<>();
        int counter = 0;

        for (char c : s.toCharArray()) {
            if (c == '(') {
                stack.push('(');
            } else if (stack.isEmpty()) {
                counter++;
            } else {
                stack.pop();
            }
        }

        return counter + stack.size();
    }
}
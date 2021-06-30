
class Solution {
    public int maxDepth(String s) {
        int height = 0;
        int max = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '(') {
                height++;
                if (height > max)
                    max = height;
            }
            if (c == ')') {
                height--;
            }
        }

        return max;
    }
}
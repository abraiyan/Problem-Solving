import java.util.Currency;
import java.util.Stack;

class Solution1221 {
    public int balancedStringSplit(String s) {
        int output = 0;
        char current = s.charAt(0);
        int count = 1;

        for (int i = 1; i < s.length(); i++) {
            if (s.charAt(i) == current) {
                count++;
            } else {
                count--;
            }

            if (count == 0) {
                output++;
            }
        }

        return output;
    }
}
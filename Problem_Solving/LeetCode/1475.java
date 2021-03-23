/*
    Problem: Final Prices With a Special Discount in a Shop (https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/)
  
    -> Time Complexity: O(n), Space Complexity: O(n)
*/


class Solution {
    public static int[] finalPrices(int[] prices) {

        Stack<Integer> stack = new Stack<>();
        for(int i = 0; i < prices.length; i++) {
            while(!stack.isEmpty() && prices[stack.peek()] >= prices[i]) {
                prices[stack.pop()] -= prices[i];
            }
            stack.push(i);
        }

        return prices;
    }
}
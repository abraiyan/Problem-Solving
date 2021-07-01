
class Solution1047 {

    public static void main(String[] args) {
        System.out.println(removeDuplicates("abbaca"));
    }

    public static String removeDuplicates(String s) {
        StringBuilder stringBuilder = new StringBuilder();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (stringBuilder.length() > 0 && stringBuilder.charAt(stringBuilder.length() - 1) == c) {
                stringBuilder.deleteCharAt(stringBuilder.length() - 1);
            } else {
                stringBuilder.append(c);
            }
        }

        return stringBuilder.toString();
    }
}
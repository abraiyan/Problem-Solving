
class Solution1598 {

    public static void main(String[] args) {
        String[] logs = { "./", "../", "./" };
        System.out.println(minOperations(logs));
    }

    public static int minOperations(String[] logs) {
        int output = 0;
        for (String s : logs) {
            if (s.equals("../")) {
                if (output != 0)
                    output--;
                else
                    continue;
            } else if (s.equals("./")) {
                continue;
            } else {
                output++;
            }
        }

        return output;
    }
}
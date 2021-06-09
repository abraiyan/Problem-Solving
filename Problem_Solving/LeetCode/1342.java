class Problem1342 {
    public int numberOfSteps(int num) {
        int counter = 0;
        while (num != 0) {
            if (num % 2 == 0) {
                num = num / 2;
                counter++;
            } else {
                num = num - 1;
                counter++;
            }
        }

        return counter;
    }
}
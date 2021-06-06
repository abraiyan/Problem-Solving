class Problem201 {

    public static int rangeBitwiseAnd(int left, int right) {
        int temp = right;
        
        for(int i = right - 1; i >= left; i--) {
            temp = temp & i;
            i = temp;
            if(temp == 0) return 0;
        }

        return temp;
    }
}

class Solution860 {
    public boolean lemonadeChange(int[] bills) {
        int fiveCounter = 0;
        int tenCounter = 0;

        for (int n : bills) {
            switch (n) {
                case 5:
                    fiveCounter++;
                    break;
                case 10:
                    if (fiveCounter == 0) {
                        return false;
                    }

                    fiveCounter--;
                    tenCounter++;
                    break;
                default:
                    if (fiveCounter == 0) {
                        return false;
                    } else if (fiveCounter >= 1 && tenCounter >= 1) {
                        fiveCounter--;
                        tenCounter--;
                    } else if (fiveCounter >= 3) {
                        fiveCounter -= 3;
                    } else {
                        return false;
                    }
            }
        }

        return true;

    }
}
/*
    Problem: Minimum Flips to Make a OR b Equal to c (https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/)
*/

class Problem1318 {
  public int minFlips(int a, int b, int c) {

    int output = 0;
    for (int i = 0; i < 32; i++) {
      boolean x = false, y = false, z = false;

      if ((a & (1 << i)) > 0) {
        x = true;
      }

      if ((b & (1 << i)) > 0) {
        y = true;
      }

      if ((c & (1 << i)) > 0) {
        z = true;
      }

      if (!z) {
        if (x && y)
          output += 2;
        else if (x || y)
          output++;
      } else {
        if (!x && !y)
          output++;
      }
    }

    return output;
  }
}
#include <stdint.h>

class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t result = 0;
        int power = 31;
        
        while(n != 0) {
            result += (n & 1) << power;
            n = n >> 1;
            power--;
        }
        
        return result;
    }
};
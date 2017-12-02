class Solution {
    public int divide(int dividend, int divisor) {
        if (divisor == 0) return Integer.MAX_VALUE;
        if (dividend == Integer.MIN_VALUE) {
            if (divisor == 1) return Integer.MIN_VALUE;
            else if (divisor == -1) return Integer.MAX_VALUE;
        }
        int res = 0;
        int sign = 1;
        long dend = (long) dividend;
        long dsor = (long) divisor;
        if (dend < 0) {
            dend = -dend;
            sign = -sign;
        }
        if (dsor < 0) {
            dsor = -dsor;
            sign = -sign;
        }
        while (dend >= dsor) {
            int shift = 0;
            while (dend >= (dsor * (1L << shift))) {
                shift++;
            }
            dend -= dsor * (1 << (shift - 1));
            res += (1 << (shift - 1));
        }
        return res * sign;
    }
}

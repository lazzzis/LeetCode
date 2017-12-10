class Solution {
public int monotoneIncreasingDigits(int N) {
        char[] s = String.valueOf(N).toCharArray();
        int i = 1;
        while (i < s.length && s[i - 1] <= s[i]) {
                i++;
        }
        while (i > 0 && i < s.length && s[i - 1] > s[i]) {
                s[i - 1]--;
                i--;
        }
        i++;
        while (i < s.length) {
                s[i++] = '9';
        }
        return Integer.parseInt(String.valueOf(s));
}
}

class Solution {
    public int compress(char[] chars) {
        int i = 0;
        int j = 0;
        int len = 0;
        while (i < chars.length) {
            j = i;
            while (j < chars.length && chars[j] == chars[i]) { j++; }
            chars[len++] = chars[i];
            if (j - i > 1) {
                String s = String.valueOf(j - i);
                for (char c : s.toCharArray()) {
                    chars[len++] = c;
                }
            }
            i = j;
        }
        return len;
    }
}

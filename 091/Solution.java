class Solution {
    public int numDecodings(String s) {
        if (s.length() == 0) return 0;
        int[] dp = new int[s.length() + 1];
        dp[0] = 1;
        dp[1] = char2Int(s.charAt(0)) == 0 ? 0 : 1;
        for (int i = 2; i < s.length() + 1; i++) {
            int index = i - 1;
            int prev = char2Int(s.charAt(index - 1));
            int cur = char2Int(s.charAt(index));
            dp[i] = 0;
            if (cur != 0) {
                dp[i] += dp[i - 1];
            }
            if (prev != 0 && (prev * 10 + cur) <= 26) {
                dp[i] += dp[i - 2];
            }
        }
        return dp[s.length()];
    }

    private int char2Int (char c) {
        return Character.getNumericValue(c) - Character.getNumericValue('0');
    }
}

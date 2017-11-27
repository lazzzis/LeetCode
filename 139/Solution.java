class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> set = new HashSet<>();
        int maxLen = 0;
        for (String word : wordDict) {
            set.add(word);
            maxLen = Math.max(maxLen, word.length());
        }
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;
        for (int i = 1; i < s.length() + 1; i ++) {
            StringBuilder sb = new StringBuilder("");
            for (int j = i; j >= Math.max(1, i - maxLen); j--) {
                sb.insert(0, s.charAt(j - 1));
                if (dp[j - 1] && set.contains(sb.toString())) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
    }
}

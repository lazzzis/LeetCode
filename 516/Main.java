// O(N ^ 2)
// https://www.youtube.com/watch?v=OZX1nqaQ_9M
public class LongestPalindromicSubsequence516 {
    class Solution {
        public int longestPalindromeSubseq(String s) {
            int[][] dp = new int[s.length()][s.length()];
            boolean[][] vis = new boolean[s.length()][s.length()];
            return helper(
                    s, 0, s.length() - 1, dp, vis
            );
        }

        public int helper (String s, int left, int right, int[][] dp, boolean[][] vis) {
            if (vis[left][right]) {
                return dp[left][right];
            }
            vis[left][right] = true;
            if (left == right) {
                dp[left][right] = 1;
                return 1;
            }
            if (left > right) {
                dp[left][right] = 0;
                return 0;
            }
            char x = s.charAt(left);
            char y = s.charAt(right);
            if (x == y) {
                dp[left][right] = helper(
                        s, left + 1, right - 1, dp, vis
                ) + 2;
            }
            int temp = Math.max(
                    helper(s, left + 1, right, dp, vis),
                    helper(s, left, right - 1, dp, vis)
            );
            dp[left][right] = Math.max(dp[left][right], temp);
            return dp[left][right];
        }
    }
}

class Solution {
    public boolean isMatch(String s, String p) {
        boolean[][] vis = new boolean[s.length()][p.length()];
        for (int i = 0; i < s.length(); i ++) {
            for (int j = 0; j < p.length(); j ++) {
                vis[i][j] = false;
            }
        }
        return isMatch(s, p, s.length() - 1, p.length() - 1, vis);
    }

    private boolean isMatch(String s, String p, int i, int j, boolean[][] vis) {
        if (j <= -1) return i <= -1;
        if (i <= -1) return p.charAt(j) == '*' && isMatch(s, p, i, j - 2, vis);
        if (vis[i][j]) return true;
        if (p.charAt(j) == '.') vis[i][j] = isMatch(s, p, i - 1, j - 1, vis);
        else if (p.charAt(j) == '*') {
            vis[i][j] = isMatch(s, p, i, j - 2, vis);
            if (vis[i][j]) return true;
            if (s.charAt(i) == p.charAt(j - 1) || p.charAt(j - 1) == '.') {
                vis[i][j] = isMatch(s, p, i - 1, j, vis);
            }
        } else {
            vis[i][j] = (s.charAt(i) == p.charAt(j) && isMatch(s, p, i - 1, j - 1, vis));
        }
        return vis[i][j];
    }
}

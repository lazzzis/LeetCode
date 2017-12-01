class Solution {
    public boolean isMatch(String s, String p) {
        boolean[][] vis = new boolean[s.length() + 1][p.length() + 1];
        boolean[][] res = new boolean[s.length() + 1][p.length() + 1];
        vis[0][0] = res[0][0] = true;
        return isMatch(s, p, s.length(), p.length(), vis, res);
    }

    private boolean isMatch(String s, String p, int i, int j, boolean[][] vis, boolean[][] res) {
        if (j == 0) return i == 0;
        if (i == 0) return p.charAt(j - 1) == '*' && isMatch(s, p, i, j - 2, vis, res);
        if (vis[i][j]) return res[i][j];
        vis[i][j] = true;
        if (p.charAt(j - 1) == '.') res[i][j] = isMatch(s, p, i - 1, j - 1, vis, res);
        else if (p.charAt(j - 1) == '*') {
            res[i][j] = isMatch(s, p, i, j - 2, vis, res);
            if (res[i][j]) return true;
            if (s.charAt(i - 1) == p.charAt(j - 2) || p.charAt(j - 2) == '.') res[i][j] = isMatch(s, p, i - 1, j, vis, res);
        } else
            res[i][j] = (s.charAt(i - 1) == p.charAt(j - 1) && isMatch(s, p, i - 1, j - 1, vis, res));
        return res[i][j];
    }
}

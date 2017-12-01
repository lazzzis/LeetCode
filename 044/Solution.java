class Solution {
    public boolean isMatch(String s, String p) {
        boolean[][] vis = new boolean[s.length() + 1][p.length() + 1];
        boolean[][] res = new boolean[s.length() + 1][p.length() + 1];
        vis[0][0] = true;
        return isMatch(s, p, s.length(), p.length(), vis, res);
    }

    private boolean isMatch(String s, String p, int lenS, int lenP, boolean[][] vis, boolean[][] res) {
        if (lenP == 0) return lenS == 0;
        if (lenS == 0) return p.charAt(lenP - 1) == '*' && isMatch(s, p, lenS, lenP - 1, vis, res);
        if (vis[lenS][lenP]) return res[lenS][lenP];
        vis[lenS][lenP] = true;
        char i = s.charAt(lenS - 1), j = p.charAt(lenP - 1);
        if (j == '?') res[lenS][lenP] = isMatch(s, p, lenS - 1, lenP - 1, vis, res);
        else if (j == '*') res[lenS][lenP] = isMatch(s, p, lenS - 1, lenP, vis, res) || isMatch(s, p, lenS, lenP - 1, vis, res);
        else res[lenS][lenP] = i == j && isMatch(s, p, lenS - 1, lenP - 1, vis, res);
        return res[lenS][lenP];
    }
}

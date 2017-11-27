class Solution {
    public int maximumSwap(int num) {
        String n = Integer.toString(num);
        String ans = n;
        for (int i = 0; i < n.length(); i++) {
            // StringBuilder sb = new StringBuilder(n);
            for (int j = i + 1; j < n.length(); j++) {
                StringBuilder sb = new StringBuilder(n);
                sb.replace(i, i + 1, n.substring(j, j + 1));
                sb.replace(j, j + 1, n.substring(i, i + 1));
                ans = max(sb.toString(), ans);
            }
        }
        return Integer.parseInt(ans);
    }

    private String max(String a, String b) {
        return a.compareTo(b) > 0 ? a : b;
    }
}

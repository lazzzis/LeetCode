class Solution {
    public String addBinary(String a, String b) {
        StringBuilder sb = new StringBuilder("");
        int rem = 0;
        int i = a.length() - 1;
        int j = b.length() - 1;
        while (i >= 0 || j >= 0 || rem > 0) {
            int l = i < 0 ? 0 : a.charAt(i) - '0';
            int r = j < 0 ? 0 : b.charAt(j) - '0';
            if (l + r + rem >= 2) {
                sb.insert(0, l + r + rem - 2);
                rem = 1;
            } else {
                sb.insert(0, l + r + rem);
                rem = 0;
            }
            i --;
            j --;
        }
        return sb.toString();
    }
}

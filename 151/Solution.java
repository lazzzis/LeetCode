class Solution {
    public String reverseWords(String s) {
        s = s.trim();
        if (s.length() == 0) return "";
        String[] strs = s.split("\\s+");
        for (int i = 0; i < Math.ceil(strs.length * 0.5); i++) {
            String temp = strs[i] + "";
            strs[i] = strs[strs.length - 1 - i] + "";
            strs[strs.length - 1 - i] = temp;
        }
        String ans = "";
        for (int i = 0; i < strs.length - 1; i ++) {
            ans = ans + strs[i] + " ";
        }
        ans += strs[strs.length - 1];
        return ans;
    }
}

// https://discuss.leetcode.com/topic/87845/java-solution-sliding-window

class Solution2 {
    public boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length()) return false;
        int[] cnts = new int[26];
        for (char c : s1.toCharArray()) {
            cnts[c - 'a']++;
        }
        for (int i = 0; i < s1.length(); i++) {
            cnts[s2.charAt(i) - 'a']--;
        }
        if (allZero(cnts)) return true;
        for (int i = s1.length(); i < s2.length(); i++) {
            cnts[s2.charAt(i) - 'a'] --;
            cnts[s2.charAt(i - s1.length()) - 'a'] ++;
            if (allZero(cnts)) return true;
        }
        return false;
    }

    private boolean allZero (int[] cnts) {
        for (int i : cnts) {
            if (i != 0) return false;
        }
        return true;
    }
}

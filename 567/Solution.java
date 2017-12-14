class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int[] cnts = new int[26];
        for (char c : s1.toCharArray()) {
            cnts[c - 'a'] ++;
        }
        int i = 0;
        int j = 0;
        while (i < s2.length()) {
            while (i < s2.length() && cnts[s2.charAt(i) - 'a'] == 0) {
                i++;
            }
            int count = 0;
            int[] subCnts = new int[26];
            j = i;
            while (i < s2.length() && cnts[s2.charAt(i) - 'a'] > 0) {
                char c = s2.charAt(i);
                subCnts[c - 'a']++;
                count++;
                if (subCnts[c - 'a'] > cnts[c - 'a']) {
                    while (j < i && subCnts[c - 'a'] > cnts[c - 'a']) {
                        subCnts[s2.charAt(j) - 'a']--;
                        count--;
                        j++;
                    }
                }
                if (count == s1.length()) return true;
                i++;
            }
            i++;
        }
        return false;
    }
}

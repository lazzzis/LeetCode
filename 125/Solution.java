class Solution {
    public boolean isPalindrome(String s) {
        // ignore cases
        s = s.toLowerCase();
        // according to the definition of palindrome
        // the first nth letter is same with the last nth letter
        // only consider alphanumeric characters
        int i = 0;
        int j = s.length() - 1;
        do {
            while (i < s.length() - 1 && !Character.isAlphabetic(s.charAt(i)) && !Character.isDigit(s.charAt(i))) i++;
            while (j >= 0 && !Character.isAlphabetic(s.charAt(j)) && !Character.isDigit(s.charAt(j))) j--;
            if (i > j || s.charAt(i) != s.charAt(j)) {
                break;
            } else {
                i++; j--;
            }
        } while (i <= j);
        return i >= j;
    }
}

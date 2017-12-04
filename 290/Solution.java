class Solution {
    public boolean wordPattern(String pattern, String str) {
        String[] words = str.split("\\s+");
        Map<Character, String> c2Str = new HashMap<>();
        Map<String, Character> str2C = new HashMap<>();
        if (pattern.length() != words.length) return false;
        for (int i = 0; i < pattern.length(); i++) {
            char c = pattern.charAt(i);
            String word = words[i];
            if (c2Str.containsKey(c) && str2C.containsKey(word)) {
                if (c != str2C.get(word)) return false;
                if (!c2Str.get(c).equals(word)) return false;
            } else {
                if (!(!c2Str.containsKey(c) && !str2C.containsKey(word))) return false;
                c2Str.put(c, word);
                str2C.put(word, c);
            }
        }
        return true;
    }
}

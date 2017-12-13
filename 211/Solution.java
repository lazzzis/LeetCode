class WordDictionary {

    class TrieNode {
        public String item = "";
        public TrieNode[] children = new TrieNode[26];
    }

    private TrieNode root;
    /** Initialize your data structure here. */
    public WordDictionary() {
        root = new TrieNode();
    }

    /** Adds a word into the data structure. */
    public void addWord(String word) {
        TrieNode cur = this.root;
        for (char c : word.toCharArray()) {
            if (cur.children[c - 'a'] == null) cur.children[c - 'a'] = new TrieNode();
            cur = cur.children[c - 'a'];
        }
        cur.item = word;
    }

    /** Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. */
    public boolean search(String word) {
        return helper(word, 0, this.root);
    }

    private boolean helper (String word, int index, TrieNode root) {
        if (index >= word.length()) return !root.item.equals("");
        char c = word.charAt(index);
        if (c == '.') {
            for (int i = 0; i < 26; i++) {
                if (root.children[i] != null && helper(word, index + 1, root.children[i]))
                    return true;
            }
            return false;
        } else {
            if (root.children[c - 'a'] == null) return false;
            return helper(word, index + 1, root.children[c - 'a']);
        }
    }
}

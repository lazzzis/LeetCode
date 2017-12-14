class Trie {

    class Node {
        String item = "";
        Node[] children = new Node[26];
    }

    private Node root;

    /** Initialize your data structure here. */
    public Trie() {
        this.root = new Node();
    }

    /** Inserts a word into the trie. */
    public void insert(String word) {
        Node root = this.root;
        for (char c : word.toCharArray()) {
            if (root.children[c - 'a'] == null) {
                root.children[c - 'a'] = new Node();
            }
            root = root.children[c - 'a'];
        }
        root.item = word;
    }

    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        Node root = this.root;
        for (char c : word.toCharArray()) {
            if (root.children[c - 'a'] == null) {
                return false;
            }
            root = root.children[c - 'a'];
        }
        return !root.item.equals("");
    }

    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        Node root = this.root;
        for (char c : prefix.toCharArray()) {
            if (root.children[c - 'a'] == null) {
                return false;
            }
            root = root.children[c - 'a'];
        }
        if (!root.item.equals("")) {
            return true;
        }
        for (Node node : root.children) {
            if (node != null) return true;
        }
        return false;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */

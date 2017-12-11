class Solution {
    public boolean areSentencesSimilarTwo(String[] words1, String[] words2, String[][] pairs) {
      if (words1.length != words2.length) return false;
      Map<String, Integer> ids = new HashMap<>();
      int id = 0;
      for (String[] pair : pairs) {
        if (!ids.containsKey(pair[0])) ids.put(pair[0], id++);
        if (!ids.containsKey(pair[1])) ids.put(pair[1], id++);
      }
      int[] roots = new int[id];
      for (int i = 0; i < id; i++) {
        roots[i] = i;
      }
      for (String[] pair : pairs) {
        int i1 = find(ids.get(pair[0]), roots);
        int i2 = find(ids.get(pair[1]), roots);
        roots[i2] = roots[i1] = Math.min(i1, i2);
      }
      for (int i = 0; i < words1.length; i++) {
        if (words1[i].equals(words2[i])) continue;
        if (!ids.containsKey(words1[i]) || !ids.containsKey(words2[i])) {
          return false;
        }
        if (find(ids.get(words1[i]), roots) != find(ids.get(words2[i]), roots)) return false;
      }
      return true;
    }

  private int find(int root, int[] roots) {
    if (roots[root] == root) return root;
    return roots[root] = find(roots[root], roots);
  }
}

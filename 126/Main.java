import java.util.*;

// https://www.youtube.com/watch?v=PblfQrdWXQ4

public class WordLadderII {
    class Solution {
        public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
            List<List<String>> ans = new LinkedList<>();
            HashSet<String> set = new HashSet<>(wordList);
            if (!set.contains(endWord)) {
                return ans;
            }
            set.remove(beginWord);
//        set.remove(endWord);
            HashMap<String, Integer> steps = new HashMap<>();
            steps.put(beginWord, 1);
            HashMap<String, LinkedList<String>> parents = new HashMap<>();

            Set<String> q = new HashSet<>();
            q.add(beginWord);
            int step = 1;
            boolean success = false;
            while (!q.isEmpty()) {
                step++;
                Set<String> nextQ = new HashSet<>();
                for (String word : q) {
                    if (word.equals(endWord)) {
                        success = true;
                        continue;
                    }
                    for (int i = 0; i < word.length(); i++) {
                        char[] cs = word.toCharArray();
                        for (char j = 'a'; j <= 'z'; j++) {
                            cs[i] = j;
                            String newWord = new String(cs);
                            if (!set.contains(newWord)) {
                                continue;
                            }
                            int curStep = steps.getOrDefault(newWord, Integer.MAX_VALUE);
                            if (step <= curStep) {
                                steps.put(newWord, step);
                                nextQ.add(newWord);
                                LinkedList<String> parent = parents.getOrDefault(newWord, new LinkedList<>());
                                parent.add(word);
                                parents.put(newWord, parent);
                            }
                        }
                    }
                }
                q = nextQ;
            }
            if (!success) {
                return ans;
            }
            helper(endWord, beginWord, parents, new LinkedList<>(), ans);
            return ans;
        }

        public void helper(
                String cur, String startWord, HashMap<String, LinkedList<String>> parents, LinkedList<String> list,
                List<List<String>> ans
        ) {
            list.addFirst(cur);
            if (cur.equals(startWord)) {
                ans.add(new LinkedList<>(list));
                list.removeFirst();
                return;
            }
            List<String> parent = parents.get(cur);
            for (String word : parent) {
                helper(word, startWord, parents, list, ans);
            }
            list.removeFirst();
        }
    }
}

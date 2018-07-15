import java.util.*;

// Both solution 1 and solution 2 are based on BFS
// but time complexity are quite different!
// First one: O(n * (26 ^ L)) L is the length of the word
// Second one: O(n * n)
// so if the list is quite long, second one might cost much more time

// third one is bidirectional BFS: much faster!
// https://www.youtube.com/watch?v=vWPCm69MSfs
public class WordLadder {

    class Solution {
        public int ladderLength (String beginWord, String endWord, List<String> wordList) {
            Set<String> set = new HashSet<>(wordList);
            Set<String> visited = new HashSet<>();
            Queue<Item> q = new LinkedList<>();
            q.offer(new Item(beginWord, 1));
            visited.add(beginWord);
            while (!q.isEmpty()) {
                Item cur = q.poll();
                if (cur.value.equals(endWord)) {
                    return cur.step;
                }
                for (int i = 0; i < cur.value.length(); i++) {
                    char[] words = cur.value.toCharArray();
                    for (char j = 'a'; j <= 'z'; j++) {
                        words[i] = j;
                        String newWord = new String(words);
                        if (set.contains(newWord) && !visited.contains(newWord)) {
                            visited.add(newWord);
                            q.offer(new Item(
                                    newWord,
                                    cur.step + 1
                            ));
                        }
                    }
                }
            }
            return 0;
        }

        class Item {

            public String value;
            public int step;

            public Item (String value, int step) {
                this.value = value;
                this.step = step;
            }
        }
    }

    class Solution2 {
        public int ladderLength(String beginWord, String endWord, List<String> wordList) {
            Set<String> visited = new HashSet<>();
            Map<String, Integer> steps = new HashMap<>();
            List<Integer> links[] = new List[wordList.size()];
            for (int i = 0; i < wordList.size(); i ++) {
                for (int j = i + 1; j < wordList.size(); j ++) {
                    if (links[i] == null) links[i] = new ArrayList<>();
                    if (links[j] == null) links[j] = new ArrayList<>();
                    if (similar(wordList.get(i), wordList.get(j))) {
                        links[i].add(j);
                        links[j].add(i);
                    }
                }
            }
            Queue<Integer> q = new LinkedList<>();
            for (int i = 0; i < wordList.size(); i++) {
                String word = wordList.get(i);
                if (similar(beginWord, word)) {
                    q.offer(i);
                    visited.add(word);
                    steps.put(word, 2);
                }
            }
            while (!q.isEmpty()) {
                int index = q.poll();
                String word = wordList.get(index);
                if (word.equals(endWord)) {
                    return steps.get(word);
                }
                int step = steps.get(word);
                for (int i : links[index]) {
                    if (visited.contains(wordList.get(i))) {
                        continue;
                    }
                    q.offer(i);
                    visited.add(wordList.get(i));
                    steps.put(wordList.get(i), step + 1);
                }
            }
            return 0;
        }

        public boolean similar (String a, String b) {
            int cnt = 0;
            for (int i = 0; i < a.length(); i++) {
                if (a.charAt(i) != b.charAt(i)) {
                    cnt++;
                    if (cnt > 1) {
                        return false;
                    }
                }
            }
            return cnt == 1;
        }
    }

    class Solution3 {
        public int ladderLength (String beginWord, String endWord, List<String> wordList) {
            Set<String> set = new HashSet<>(wordList);
            if (!set.contains(endWord)) {
                return 0;
            }
            Set<String> q1 = new HashSet<>();
            Set<String> q2 = new HashSet<>();
            q1.add(beginWord);
            q2.add(endWord);
            set.remove(beginWord);
            set.remove(endWord);
            int step = 1;
            while (!q1.isEmpty() && !q2.isEmpty()) {
                step++;
                Set<String> q = new HashSet<>();
                if (q1.size() > q2.size()) {
                    Set<String> t = q1; q1 = q2; q2 = t;
                }
                for (String word : q1) {
                    for (int i = 0; i < word.length(); i++) {
                        char cs[] = word.toCharArray();
                        for (char j = 'a'; j <= 'z'; j++) {
                            cs[i] = j;
                            String newWord = new String(cs);
                            if (set.contains(newWord)) {
                                q.add(newWord);
                                set.remove(newWord);
                            }
                            if (q2.contains(newWord)) {
                                return step;
                            }
                        }
                    }
                }
                q1 = q;
            }
            return 0;
        }
    }
}

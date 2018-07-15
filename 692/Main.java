import java.util.*;
// https://www.youtube.com/watch?v=POERw4yDVBw
public class TopKFrequentWords692 {
    class Solution {
        public List<String> topKFrequent(String[] words, int k) {
            HashMap<String, Integer> map = new HashMap<>();
            for (String word : words) {
                int freq = map.getOrDefault(word, 0);
                map.put(word, freq + 1);
            }
            Item[] items = new Item[map.size()];
            int idx = 0;
            for (Map.Entry<String, Integer> entry : map.entrySet()) {
                items[idx++] = new Item(entry.getKey(), entry.getValue());
            }
            Arrays.sort(items, (x, y) -> {
                if (x.freq == y.freq) {
                    return x.word.compareTo(y.word);
                }
                return - x.freq + y.freq;
            });
            LinkedList<String> list = new LinkedList<>();
            for (int j = 0; j < k; j++) {
                list.add(items[j].word);
            }
            return list;
        }
        class Item {
            String word;
            int freq;
            public Item (String w, int f) {
                word = w; freq = f;
            }
        }
    }

    class Solution2 {
        public List<String> topKFrequent(String[] words, int k) {
            HashMap<String, Integer> map = new HashMap<>();
            for (String w : words) {
                int freq = map.getOrDefault(w, 0);
                freq++;
                map.put(w, freq);
            }
            PriorityQueue<String> pq = new PriorityQueue<>(k, (x, y) -> {
                int freqX = map.get(x);
                int freqY = map.get(y);
                if (freqX == freqY) {
                    return y.compareTo(x);
                }
                return freqX - freqY;
            });
            for (Map.Entry<String, Integer> entry : map.entrySet()) {
                int size = pq.size();
                if (size < k) {
                    pq.offer(entry.getKey());
                } else {
                    // IMPORTANT: do in sequence
                    pq.offer(entry.getKey());
                    pq.poll();
                }
            }
            LinkedList<String> list = new LinkedList<>();
            while (!pq.isEmpty()) {
                list.addFirst(pq.poll());
            }
            return list;
        }
    }

    class Solution3 {
        public List<String> topKFrequent(String[] words, int k) {
            HashMap<String, Integer> map = new HashMap<>();
            for (String w : words) {
                int freq = map.getOrDefault(w, 0);
                freq++;
                map.put(w, freq);
            }
            PriorityQueue<Map.Entry<String, Integer>> pq = new PriorityQueue<>(k, (x, y) -> {
                if (x.getValue().equals(y.getValue())) {
                    return -x.getKey().compareTo(y.getKey());
                }
                return x.getValue() - y.getValue();
            });
            for (Map.Entry<String, Integer> entry : map.entrySet()) {
                pq.offer(entry);
                if (pq.size() > k) {
                    pq.poll();
                }
            }
            LinkedList<String> list = new LinkedList<>();
            while (!pq.isEmpty()) {
                list.addFirst(pq.poll().getKey());
            }
            return list;
        }
    }
}

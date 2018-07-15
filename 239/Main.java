import java.util.Deque;
import java.util.LinkedList;
import java.util.List;
import java.util.PriorityQueue;

public class MaxSlidingWindow {
    class Solution {
        public int[] maxSlidingWindow(int[] nums, int k) {
            if (k == 0 || nums.length == 0) {
                return new int[]{};
            }
            Deque<Item> q = new LinkedList<>();
            for (int i = 0; i < k - 1; i++) {
                addItem(q, new Item(nums[i], i), k);
            }
            List<Integer> l = new LinkedList<>();
            int i = k - 1;
            while (i < nums.length) {
                addItem(q, new Item(nums[i], i), k);
                l.add(q.peek().value);
                i++;
            }
            return l.stream().mapToInt(x -> x).toArray();
        }

        public void addItem(Deque<Item> q, Item item, int k) {
            while (!q.isEmpty()) {
                if (item.index - q.peek().index >= k) {
                    q.poll();
                } else {
                    break;
                }
            }
            if (q.isEmpty()) {
                q.offerFirst(item);
                return;
            }
            if (q.peek().value <= item.value) {
                q.offerFirst(item);
                return;
            }
            while (!q.isEmpty()) {
                if (item.index - q.getLast().index >= k || item.value >= q.getLast().value) {
                    q.pollLast();
                } else {
                    break;
                }
            }
            q.offerLast(item);
        }

        class Item {
            int value;
            int index;

            public Item(int value, int index) {
                this.value = value;
                this.index = index;
            }
        }
    }

    class Solution1 {
        public int[] maxSlidingWindow(int[] nums, int k) {
            if (nums.length == 0) {
                return nums;
            }
            if (k == 0) {
                return new int[]{};
            }
            PriorityQueue<P> pq = new PriorityQueue<>(k, (x, y) -> {
                if (x.value == y.value) {
                    return y.index - x.index;
                }
                return y.value - x.value;
            });
            List<Integer> l = new LinkedList<>();
            for (int i = 0; i < k - 1; i++) {
                pq.offer(new P(nums[i], i));
            }
            int i = k - 1;
            while (i < nums.length) {
                int value = nums[i];
                while (!pq.isEmpty()) {
                    P p = pq.peek();
                    if (i - p.index >= k) {
                        pq.poll();
                    } else {
                        break;
                    }
                }
                if (pq.isEmpty()) {
                    l.add(value);
                } else {
                    l.add(Math.max(value, pq.peek().value));
                }
                pq.offer(new P(value, i));
                i++;
            }
            return l.stream().mapToInt(x -> x).toArray();
        }
    }

    class P {
        int value;
        int index;

        public P(int value, int index) {
            this.value = value;
            this.index = index;
        }
    }
}

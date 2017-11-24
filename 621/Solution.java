class Solution {
    public int leastInterval(char[] tasks, int n) {
        PriorityQueue<Integer> q = new PriorityQueue<>(26, Collections.reverseOrder());
        int map[] = new int[26];
        for (char c : tasks) {
            map[c - 'A']++;
        }
        Arrays.stream(map).filter(x -> x != 0).forEach(q::offer);
        int time = 0;
        while (!q.isEmpty()) {
            List<Integer> temp = new LinkedList<>();
            for (int i = 0; i <= n; i++) {
                if (!q.isEmpty()) {
                    int cur = q.poll() - 1;
                    if (cur > 0) {
                        temp.add(cur);
                    }
                }
                time++;
                if (q.isEmpty() && temp.size() == 0) {
                    break;
                }
            }
            temp.forEach(q::offer);
        }
        return time;
    }
}

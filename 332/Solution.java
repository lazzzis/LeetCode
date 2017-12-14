// https://discuss.leetcode.com/topic/36383/share-my-solution
class Solution {

public List<String> findItinerary(String[][] tickets) {
        Map<String, PriorityQueue<String> > map = new HashMap<>();
        for (String[] pair : tickets) {
                PriorityQueue pq = map.getOrDefault(pair[0], new PriorityQueue<>());
                pq.offer(pair[1]);
                map.put(pair[0], pq);
        }
        LinkedList<String> ans = new LinkedList<>();
        dfs("JFK", map, ans);
        return ans;
}

private void dfs (String start, Map<String, PriorityQueue<String> > map, LinkedList<String> ans) {
        PriorityQueue<String> pq = map.get(start);
        while (pq != null && !pq.isEmpty()) {
                dfs(pq.poll(), map, ans);
        }
        ans.addFirst(start);
}
}

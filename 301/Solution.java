class Solution {
    public List<String> removeInvalidParentheses(String s) {
        List<String> ans = new ArrayList<>();
        boolean found = false;
        Queue<String> q = new LinkedList<>();
        Set<String> visited = new HashSet<>();
        q.offer(s);
        while (!q.isEmpty()) {
            String cur = q.poll();
            if (visited.contains(cur)) continue;
            visited.add(cur);
            if (isValid(cur)) {
                ans.add(cur);
                found = true;
            }
            if (found) continue;
            for (int i = 0; i < cur.length(); i++) {
                if (cur.charAt(i) == '(' || cur.charAt(i) == ')') {
                    q.offer(cur.substring(0, i) + cur.substring(i + 1, cur.length()));
                }
            }
        }
        return ans;
    }

    private boolean isValid (String s) {
        int cnt = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') cnt ++;
            if (c == ')') {
                cnt --;
                if (cnt < 0) return false;
            }
        }
        return cnt == 0;
    }
}

// https://discuss.leetcode.com/topic/28827/share-my-java-bfs-solution

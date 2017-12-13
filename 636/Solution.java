class Solution {
    public int[] exclusiveTime(int n, List<String> logs) {
        Stack<Integer> stack = new Stack<>();
        String[] s = logs.remove(0).split(":");
        int id = Integer.parseInt(s[0]);
        int prev = Integer.parseInt(s[2]);
        stack.push(id);
        int[] ex = new int[n];
        while (logs.size() > 0) {
            s = logs.remove(0).split(":");
            id = Integer.parseInt(s[0]);
            int time = Integer.parseInt(s[2]);
            if (s[1].equals("start")) {
                if (!stack.isEmpty()) {
                    ex[stack.peek()] += time - prev;
                }
                prev = time;
                stack.push(id);
            } else {
                ex[stack.pop()] += time - prev + 1;
                prev = time + 1;
            }
        }
        return ex;
    }
}

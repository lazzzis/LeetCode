class Solution {
public int[] dailyTemperatures(int[] temperatures) {
        Stack<Integer> stack = new Stack<>();
        int[] ans = new int[temperatures.length];
        if (temperatures.length == 0) return ans;
        stack.add(0);
        for (int i = 1; i < temperatures.length; i++) {
                int t = temperatures[i];
                while (!stack.isEmpty() && temperatures[stack.peek()] < t) {
                        int day = stack.pop();
                        ans[day] = i - day;
                }
                stack.add(i);
        }
        while (!stack.isEmpty()) {
                ans[stack.pop()] = 0;
        }
        return ans;
}
}

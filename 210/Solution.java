class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        int[] indegrees = IntStream.range(0, numCourses).map(x -> 0).toArray();
        List<Integer>[] links = new ArrayList[numCourses];
        IntStream.range(0, numCourses).forEach(i -> links[i] = new ArrayList<>());
        Arrays.stream(prerequisites).forEach(pair -> {
            indegrees[pair[1]]++;
            links[pair[1]].add(pair[0]);
        });
        Queue<Integer> q = new LinkedList<>();
        IntStream.range(0, numCourses).filter(i -> indegrees[i] == 0).forEach(q::offer);
        List<Integer> order = new ArrayList<>();
        while (!q.isEmpty()) {
            int top = q.poll();
            order.add(top);
            links[top].forEach(i -> indegrees[i]--);
            links[top].stream().filter(i -> indegrees[i] == 0).forEach(q::offer);
        }
        int[] ans = new int[numCourses];
        ListIterator li = order.listIterator();
        while (li.hasNext()) {
            ans[li.nextIndex()] = (int) li.next();
        }
        return (order.size() == numCourses) ? ans : new int[0];
    }
}

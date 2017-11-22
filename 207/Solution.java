public class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        int[] indegree = IntStream.range(0, numCourses).map(x -> 0).toArray();
        List<Integer>[] map = new ArrayList[numCourses];
        IntStream.range(0, numCourses).forEach(i -> map[i] = new ArrayList<>());
        Arrays.stream(prerequisites).forEach(pair -> {
            indegree[pair[0]]++;
            map[pair[1]].add(pair[0]);
        });
        Queue<Integer> q = new LinkedList<>();
        IntStream.range(0, numCourses).filter(x -> indegree[x] == 0).forEach(q::offer);
        while (!q.isEmpty()) {
            int top = q.poll();
            map[top].forEach(x -> indegree[x]--);
            map[top].stream().filter(x -> indegree[x] == 0).forEach(x -> q.offer(x));
        }
        return Arrays.stream(indegree).filter(x -> x != 0).toArray().length == 0;
    }
}

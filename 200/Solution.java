class Solution {
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length <= 0) return 0;
        boolean[][] vis = new boolean[grid.length][grid[0].length];
        Arrays.stream(vis).forEach(x -> Arrays.fill(x, false));
        int cnt = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == '1' && !vis[i][j]) {
                    cnt++;
                    paint(grid, i, j, vis);
                }
            }
        }
        return cnt;
    }

    private void paint(char[][] grid, int x, int y, boolean[][] vis) {
        if (!(x >= 0 && y >= 0 && x < grid.length && y < grid[x].length)) return;
        if (vis[x][y] || grid[x][y] == '0') return;
        vis[x][y] = true;
        paint(grid, x + 1, y, vis);
        paint(grid, x - 1, y, vis);
        paint(grid, x, y + 1, vis);
        paint(grid, x, y - 1, vis);
    }
}

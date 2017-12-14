class Solution {
    public int islandPerimeter(int[][] grid) {
        int sum = 0;
        int[][] dirs = {
                {0, 1},
                {0, -1},
                {1, 0},
                {-1, 0}
        };
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 0) continue;
                for (int[] dir : dirs) {
                    int x = i + dir[0];
                    int y = j + dir[1];
                    if (!(x >= 0 && x < grid.length && y >= 0 && y < grid[0].length)) {
                        sum++;
                    } else if (grid[x][y] == 0) {
                        sum++;
                    }
                }
            }
        }
        return sum;
    }
}

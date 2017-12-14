class Solution {
    public int[] findDiagonalOrder(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return new int[0];
        int[] res = new int[matrix.length * matrix[0].length];
        List<Integer> list = new LinkedList<>();
        for (int i = 0; i <= matrix.length - 1 + matrix[0].length - 1; i++) {
            int x = 0;
            int y = 0;
            if (i % 2 == 0) {
                x = i;
                y = 0;
                if (i >= matrix.length) {
                    x = x - (i - matrix.length + 1);
                    y = y + (i - matrix.length + 1);
                }
                while (x >= 0) {
                    if (x < matrix.length && y < matrix[0].length) {
                        list.add(matrix[x][y]);
                    }
                    x--;
                    y++;
                }
            } else {
                x = 0;
                y = i;
                if (i >= matrix[0].length) {
                    x = x + (i - matrix[0].length + 1);
                    y = y - (i - matrix[0].length + 1);
                }
                while (y >= 0) {
                    if (x < matrix.length && y < matrix[0].length) {
                        list.add(matrix[x][y]);
                    }
                    x++;
                    y--;
                }
            }
        }
        int i = 0;
        for (int n : list) {
            res[i++] = n;
        }
        return res;
    }
}

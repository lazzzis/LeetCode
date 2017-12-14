class NumMatrix {
    private int subSum[][];
    private int[][] matrix;
    public NumMatrix(int[][] matrix) {
        this.matrix = matrix;
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return;
        int row = matrix.length;
        int col = matrix[0].length;
        subSum = new int[row + 1][col + 1];
        for (int i = 1; i <= row; i++) {
            int sum = 0;
            for (int j = 1; j <= col; j++) {
                sum += matrix[i - 1][j - 1];
                subSum[i][j] = sum + subSum[i - 1][j];
            }
        }
    }

    public int sumRegion(int row1, int col1, int row2, int col2) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return 0;
        return subSum[row2 + 1][col2 + 1]
                - subSum[row2 + 1][col1] - subSum[row1][col2 + 1] + subSum[row1][col1];
    }
}

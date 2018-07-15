public class Minesweeper529 {
    class Solution {
        public char[][] updateBoard(char[][] board, int[] click) {
            int x = click[0], y = click[1];
            // first rule
            if (board[x][y] == 'M') {
                board[x][y] = 'X';
                return board;
            }
            helper(board, x, y);
            return board;
        }

        int[][]dirs = {
                {0, 1},
                {0, -1},
                {-1, 0},
                {1, 0},
                {-1, 1},
                {1, 1},
                {1, -1},
                {-1, 1}
        };

        public void helper (char[][]board, int x, int y) {
            if (board[x][y] != 'E') {
                return;
            }
            int adj = this.adjacentMines(board, x , y);
            if (adj == 0) {
                board[x][y] = 'B';
                for (int[] dir : dirs) {
                    int nx = x + dir[0];
                    int ny = y + dir[1];
                    if (nx >= 0 && ny >= 0 && nx < board.length && ny < board[0].length) {
                        helper(board, nx, ny);
                    }
                }
            } else {
                board[x][y] = (char)(adj + (int)('0'));
            }
        }

        public int adjacentMines (char[][]board, int x, int y) {
            int cnt = 0;
            for (int[] dir : dirs) {
                int nx = x + dir[0];
                int ny = y + dir[1];
                if (nx >= 0 && ny >= 0 && nx < board.length && ny < board[0].length) {
                    if (board[nx][ny] == 'M') {
                        cnt++;
                    }
                }
            }
            return cnt;
        }
    }
}

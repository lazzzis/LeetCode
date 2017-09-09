Basically, backtracking is an efficient way for us to get the answer towards this problem.
The direct way is to put the queue row by row. When putting one queue towards a row, the program has to check the validity of this position; that is, determine whether there exists one queue in `current column`, `45 degree diagonal` and `135 degree diagonal`. If so, try another position in this row; If not, put the queue and explore next row.

But wait! Can we speed up the program? Of course, you might found the current way for backtracking costs half of the time. Now the concern becomes whether there is one way to directly check the validity of one position.

The answer is to use one flag array called `flags`. For position (row, col), `flags[col]` tells whether there is one queue in column `col`; `flags[n + col + row]` and `flags[n + 2 * n + 1 + n - 1 + col - row]` respectively suggests the existence of queue on `45 deg diagonal` and `135 deg diagonal`.

Now, the time complexity becomes `O(n * n)` where n is the length of the chessboard.

https://discuss.leetcode.com/topic/13617/accepted-4ms-c-solution-use-backtracking-and-bitmask-easy-understand

Main points:
1. go row by row
2. one array indicating if the column or diagonal had a queue before

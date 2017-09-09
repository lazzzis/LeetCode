This problem is much like `051`. The difference is just that this problem does not require the detail result but only the amount of the possibilities.

Like the thoughts described in `051`, three arrays, `cols`, `dig45`, `dig135` , are used to respectively indicate the existence of the queue on one specific column, `45 deg diagonal`, `135 deg diagonal`. Their subscriptions respectively computed by `col`, `col + row`, `n + col - row`.

Besides, I indeed use a small trick -- `total *= 2`; that is, the left part and the right part are almost same just like they are mirror images.

https://www.sigmainfy.com/blog/leetcode-n-queens-i-and-ii.html

Main points:

1. remove all the positions which obviously lead to conflicts
2. row by row
3. three arrays indicating the existence of the queue on `column`, `45 deg diagonal`, `135 deg diagonal`

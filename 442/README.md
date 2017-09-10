An obvious point is that `1 ≤ a[i] ≤ n`. It means that we can take the value `a[i]` as the index. In the iteration of the array, just negate the value whose index equals to `a[i]`.

Since these elements exist exactly one or two times. If one value is negated twice, then it is positive, indicating that the value corresponding to its index appear twice.

Main points:

1. use the array itself to note if the number appear once or twice
2. make it negative by a[a[i] - 1] = -a[a[i] - 1]
3. if we encounter the number which is already negative, then we say it must appear twice

http://www.binarycoder.org/leetcode-solution/find-duplicates-array-leetcode-solution/
http://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/

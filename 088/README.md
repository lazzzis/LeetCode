Thought this problem is a little like merging two linked list, the concern is that the time complexity is `O(n * m)` if you insert the value between two values in one array, since everytime when you insert one value, you have to push the next values towards the end by one index.

On the contrary, it's an efficient way to merge the array by scanning the arrays from the end. Just simply add the larger one to the end.

Note: don't forget to check there're some leftover that we need to handle.

Main points:

1. compare two arrays from the end
2. do not forget to check leftover

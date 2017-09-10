It has clearly stated that you have to cut off the tree following the order of the tree heights. So, it is reasonable to declare an array to store the tree based on the increasing tree heights. Hence, the order of this array is just the order you cut off the trees.

Everytime you cut off the tree, you have to compute the shortest steps between current position and next position. `BFS` definitely an efficient way to calculate the shortest path. Move to the next tree until you can't reach the next point (blocked by obstacles) or you have visit all the trees.

This algorithm is based on Floyd min-generate tree.
Use union-sets to judge whether two points are in the same tree. If true, then there must lead to a circle / loop, which should be removed.

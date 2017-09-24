/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  function findRoots (root) {
    if (roots[root] === root) {
      return root
    }
    roots[root] = findRoots(roots[root])
    return roots[root]
  }
  const roots = Array.from({ length: 2020 }, (_, i) => i)
  for (const [a, b] of edges) {
    const [ra, rb] = [findRoots(a), findRoots(b)]
    if (ra === rb) {
      return [a, b]
    }
    roots[Math.max(ra, rb)] = Math.min(ra, rb)
  }
};

if (process.env.LZS) { // local test
  const assert = require('chai').assert
  assert.deepStrictEqual(
    findRedundantConnection([[1, 2], [1, 3], [2, 3]]),
    [2, 3]
  )
  assert.deepStrictEqual(
    findRedundantConnection([[1, 2], [1, 3], [3, 1]]),
    [3, 1]
  )
  assert.deepStrictEqual(
    findRedundantConnection([[1, 2], [1, 3], [2, 3], [1, 4], [3, 5]]),
    [2, 3]
  )
  assert.deepStrictEqual(
    findRedundantConnection([[1, 6], [1, 2], [1, 3], [2, 3], [1, 4], [3, 5]]),
    [2, 3]
  )
  assert.deepStrictEqual(
    findRedundantConnection([[2, 1], [1, 2]]),
    [1, 2]
  )
  assert.deepStrictEqual(
    findRedundantConnection([[5, 2], [3, 4], [4, 3], [5, 3], [1, 3]]),
    [4, 3]
  )
}

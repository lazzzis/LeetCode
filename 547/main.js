/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
  function find (n) {
    if (roots[n] === n) return n
    roots[n] = find(roots[n])
    return roots[n]
  }
  const roots = Array.from(M, (_, i) => i)
  for (let i = 0, len = M.length; i < len; i++) {
    for (let j = 0, leng = M[i].length; j < leng; j++) {
      if (!M[i][j]) continue
      const ri = find(i)
      const rj = find(j)
      roots[ri] = roots[rj] = Math.min(ri, rj)
    }
  }
  for (let i = 0; i < M.length; i++) {
    roots[i] = find(i)
  }

  const set = new Set()
  for (const item of roots) {
    set.add(item)
  }
  return set.size
};

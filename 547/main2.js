// https://www.youtube.com/watch?v=TKHIC6muurM
/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
  function dfs (person) {
    for (let i = 0; i < M[person].length; i++) {
      if (M[person][i] && !seen.has(i)) {
        seen.add(i)
        dfs(i)
      }
    }
  }
  const seen = new Set()
  let count = 0
  for (let i = 0; i < M.length; i++) {
    if (seen.has(i)) continue
    seen.add(i)
    ++count
    dfs(i)
  }
  return count
};

if (process.env.LZS) {
  console.log(
    findCircleNum(
      [[1,1,0],
       [1,1,1],
       [0,1,1]]
    )
  )
}

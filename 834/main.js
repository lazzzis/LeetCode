/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (N, edges) {
  const conn = Array.from({length: N}, () => [])
  const nodes = Array.from({length: N + 1}, () => ({}))
  const disOfSubTree = Array.from({length: N + 1}, () => ({}))
  for (const [a, b] of edges) {
    conn[a].push(b)
    conn[b].push(a)
    nodes[a][b] = -1
    nodes[b][a] = -1
    disOfSubTree[a][b] = -1
    disOfSubTree[b][a] = -1
  }

  function helper (cur, from) {
    if (nodes[from][cur] != null && nodes[from][cur] !== -1) {
      return {
        dis: disOfSubTree[from][cur],
        nodeCnt: nodes[from][cur]
      }
    }
    nodes[from][cur] = 0
    disOfSubTree[from][cur] = 0
    for (const next of conn[cur]) {
      if (next === from) {
        continue
      }
      const {dis, nodeCnt} = helper(next, cur)
      nodes[from][cur] += nodeCnt + 1
      disOfSubTree[from][cur] += dis + 1 + nodeCnt
    }
    return {
      dis: disOfSubTree[from][cur],
      nodeCnt: nodes[from][cur]
    }
  }

  const ans = []
  for (let i = 0; i < N; i++) {
    ans.push(helper(i, N).dis)
  }
  return ans
}

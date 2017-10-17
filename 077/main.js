/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (n < k) {
    return []
  }
  if (n === k) {
    return [ Array.from({ length: n }, (_, i) => i + 1) ]
  }
  const ans = []
  function dfs (idx, count, temp) {
    if (count === k + 1) {
      ans.push(temp.slice())
      return
    }
    if (n - idx < k - count) { // no enough elements left
      return
    }
    dfs(idx + 1, count, temp)
    temp.push(idx)
    dfs(idx + 1, count + 1, temp)
    temp.pop()
  }
  dfs(1, 1, [])
  return ans
};

if (process.env.LZS) {
  console.log(combine(4, 2))
  console.log(combine(4, 5))
  console.log(combine(4, 4))
  console.log(combine(4, 1))
}

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  function dfs (s, index, tempArr, res) {
    if (tempArr.length === 3 && index < s.length) {
      const num = Number(s.slice(index))
      if (index < s.length - 1 && s[index] === '0'){
        return
      }
      if (num > 255) return
      tempArr.push(num)
      res.push(tempArr.join('.'))
      tempArr.pop()
      return
    }
    if (s[index] === '0') {
      tempArr.push(0)
      dfs(s, index + 1, tempArr, res)
      tempArr.pop()
      return
    }
    let num = 0
    for (let i = index; i < s.length; i++) {
      num = num * 10 + Number(s[i])
      if (num > 255) break
      tempArr.push(num)
      dfs(s, i + 1, tempArr, res)
      tempArr.pop()
    }
  }
  const res = []
  dfs(s, 0, [], res)
  return res
};

console.log(restoreIpAddresses('010010'))

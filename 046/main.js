/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  function dfs (curPer, choices) {
    // console.log(curPer, choices, ans)
    if (curPer.length === nums.length) {
      ans.push(curPer)
      return
    }
    const choicesArr = Object.keys(choices)
    for (const next of choicesArr) {
      Reflect.deleteProperty(choices, next)
      dfs(curPer.concat([ parseInt(next, 10) ]), choices)
      choices[next] = 1
    }
  }
  const ans = []
  const choices = {}
  nums.forEach((item) => {
    choices[item] = 1
  })
  dfs([], choices)
  return ans
}

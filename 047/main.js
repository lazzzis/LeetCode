/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  function dfs (curPer, choices) {
    // console.log(curPer, choices, ans)
    if (curPer.length === nums.length) {
      ans.push(curPer)
      return
    }
    const choicesArr = Object.keys(choices)
    for (const next of choicesArr) {
      choices[next]--
      if (choices[next] === 0) Reflect.deleteProperty(choices, next)
      dfs(curPer.concat([ parseInt(next, 10) ]), choices)
      choices[next] = choices[next] == null ? 1 : choices[next] + 1
    }
  }
  const ans = []
  const choices = {}
  nums.forEach((item) => {
    choices[item] = choices[item] == null ? 1 : choices[item] + 1
  })
  dfs([], choices)
  return ans
}

console.log(permuteUnique([1, 2, 2]))

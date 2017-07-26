/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const ans = []
  if (digits === '') {
    return ans
  }
  const dfs = function (index, acc) {
    if (!(digits[index] in map)) {
      if (index >= digits.length - 1) {
        ans.push(acc)
      }
      dfs(index + 1, acc)
      return
    }
    const str = map[digits[index]]
    for (let i = 0; i < str.length; i++) {
      if (index === digits.length - 1) {
        ans.push(acc + str[i])
      } else {
        dfs(index + 1, acc + str[i])
      }
    }
  }
  dfs(0, '')
  return ans
};

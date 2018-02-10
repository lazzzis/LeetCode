// /**
//  * @param {string[]} words
//  * @return {number[][]}
//  */
// var palindromePairs = function (words) {
//   function isPali (word) {
//     let i = 0
//     let j = word.length - 1
//     while (i <= j && word[i] === word[j]) {
//       i++
//       j--
//     }
//     return i > j
//   }
//   const map = {}
//   for (const [index, word] of Object.entries(words)) {
//     if (word === '') continue
//     if (map[word[0]] == null) map[word[0]] = []
//     map[word[0]].push({
//       val: word,
//       index: +index
//     })
//   }
//   const ans = []
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i]
//     if (word === '') {
//       for (let j = 0; j < words.length; j++) {
//         if (i !== j && isPali(words[j] + word)) {
//           ans.push([j, i])
//           if (words[j] !== '') ans.push([i, j])
//         }
//       }
//       continue
//     }
//     const lastChar = word[word.length - 1]
//     if (map[lastChar] == null) continue
//     for (const item of map[lastChar]) {
//       if (item.index !== i && isPali(item.val + word)) {
//         ans.push([item.index, i])
//       }
//     }
//   }
//   return ans
// }
// 上面这种方法也是可行的
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  function isPali (word) {
    let i = 0
    let j = word.length - 1
    while (i <= j && word[i] === word[j]) {
      i++
      j--
    }
    return i > j
  }
  const res = []
  if (words == null || words.length < 2) return res
  const map = {}
  for (const [i, word] of Object.entries(words)) {
    map[word] = i // NOTE: every word is unique
  }
  for (let [i, word] of Object.entries(words)) {
    i = +i
    for (let j = 0; j <= word.length; j++) {
      const s1 = word.slice(0, j)
      const s2 = word.slice(j)
      if (isPali(s1)) {
        const s2rvs = s2.split('').reverse().join('')
        if (map[s2rvs] != null && +map[s2rvs] !== i) {
          res.push([+map[s2rvs], i])
        }
      }
      if (s2 !== '' && isPali(s2)) {
        const s1rvs = s1.split('').reverse().join('')
        if (map[s1rvs] != null && +map[s1rvs] !== i) {
          res.push([i, +map[s1rvs]])
        }
      }
    }
  }
  return res
}

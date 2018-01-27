// /**
//  * @param {string} S
//  * @return {string}
//  */
// var reorganizeString = function (S) {
//   if (S === '') return true
//   const map = {}
//   for (const c of S) {
//     if (map[c] == null) map[c] = 0
//     map[c]++
//   }
//   const pairs = Object.entries(map)
//   pairs.sort((x, y) => -x[1] + y[1])
//   const lists = Array.from({length: pairs[0][1]}, () => [])
//   let index = 0
//   for (let [ch, cnts] of pairs) {
//     while (cnts > 0) {
//       lists[index++].push(ch)
//       cnts--
//       index %= lists.length
//     }
//   }
//   const ans = lists.reduce((prev, cur) => prev + cur.join(''), '')
//   for (let i = 1; i < ans.length; i++) {
//     if (ans[i] === ans[i - 1]) return ''
//   }
//   return ans
// }

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  if (S === '') {
    return ''
  }
  const map = {}
  for (const ch of S) {
    if (map[ch] == null) map[ch] = 0
    map[ch]++
  }
  const pairs = Object.entries(map)
  pairs.sort((x, y) => -x[1] + y[1])
  if (pairs[0][1] > Math.ceil(S.length / 2)) return ''
  let index = 0
  const ans = Array.from(S)
  for (let [ch, cnts] of pairs) {
    while (cnts > 0) {
      ans[index] = ch
      index += 2
      if (index >= S.length) index = 1
      cnts--
    }
  }
  return ans.join('')
}

// /**
//  * @param {string} S
//  * @return {number[]}
//  */
// var partitionLabels = function (S) {
//   const left = {}
//   const right = {}
//   for (let i = 0; i < S.length; i++) {
//     right[S[i]] = i
//   }
//   for (let i = S.length - 1; i >= 0; i--) {
//     left[S[i]] = i
//   }
//   const intervals = Object.keys(right).map(c => [left[c], right[c]])
//   intervals.sort((x, y) => x[0] - y[0])
//   const ans = []
//   let cur = intervals[0]
//   for (const interval of intervals) {
//     if (interval[0] <= cur[1]) {
//       cur = [
//         Math.min(interval[0], cur[0]),
//         Math.max(interval[1], cur[1])
//       ]
//     } else {
//       ans.push(cur[1] - cur[0] + 1)
//       cur = interval
//     }
//   }
//   ans.push(cur[1] - cur[0] + 1)
//   return ans
// }

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  const right = {}
  for (let i = 0; i < S.length; i++) {
    right[S[i]] = i
  }
  let start = 0
  let end = 0
  const ans = []
  for (let i = 0; i < S.length; i++) {
    const c = S[i]
    end = Math.max(end, right[c])
    if (end === i) {
      ans.push(end - start + 1)
      start = end = i + 1
    }
  }
  return ans
}

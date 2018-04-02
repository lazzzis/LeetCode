/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
// var expressiveWords = function(S, words) {
//   function valid (S, word) {
//     let si = 0, ei = 0
//     let sj = 0, ej = 0
//     while (si < S.length && sj < word.length && S[si] === word[sj]) {
//       while (ei !== S.length && S[ei] === S[si]) {
//         ei++
//       }
//       while (ej !== word.length && word[ej] === word[sj]) {
//         ej++
//       }
//       if (ei - si >= 3) {
//         if (ei - si < ej - sj) {
//           return false
//         }
//       } else { // < 3
//         if (ei - si !== ej - sj) {
//           return false
//         }
//       }
//       si = ei
//       sj = ej
//     }
//     return si >= S.length && sj >= word.length
//   }
//   let count = 0
//   for (const word of words) {
//     if (valid(S, word)) {
//       count ++
//     }
//   }
//   return count
// };

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
  function serial (word) {
    let i = 0, j = 0
    const ans = []
    while (i < word.length) {
      while (j < word.length && word[i] === word[j]) {
        j++
      }
      ans.push(j - i)
      i = j
    }
    return ans
  }

  function compare (a, b) {
    if (a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) {
      if (a[i] < b[i]) return false
      if (a[i] < 3 && a[i] !== b[i]) return false
    }
    return true
  }

  let count = 0
  const ss = serial(S)
  for (const word of words) {
    const sw = serial(word)
    if (compare(ss, sw)) count++
  }
  return count
};

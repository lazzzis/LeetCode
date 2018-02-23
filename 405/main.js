/**
 * @param {number} num
 * @return {string}
 */
// var toHex = function (num) {
//   const ans = Array.from({ length: 8 }, () => 0)
//   let positive = true
//   if (num < 0) {
//     positive = false
//     num = -num
//   }
//   let i = 0
//   while (num > 0) {
//     ans[i++] = num % 16
//     num = Math.floor(num / 16)
//   }
//   if (!positive) {
//     let rem = 0
//     for (let i = 0; i < 8; i++) {
//       let complement = 0 + rem
//       ans[i] = complement - ans[i]
//       if (ans[i] < 0) {
//         rem = -1
//         ans[i] += 16
//       }
//     }
//   }
//   if (ans.every(x => x === 0)) {
//     return '0'
//   }
//   while (ans.length > 0 && ans[ans.length - 1] === 0) {
//     ans.pop()
//   }
//   return ans.reverse().map(item => {
//     if (item < 10) {
//       return '' + item
//     } else {
//       return String.fromCharCode('a'.charCodeAt(0) + item - 10)
//     }
//   }).join('')
// }

var toHex = function (num) {
  if (num === 0) return '0'
  const ans = []
  while (num !== 0) {
    ans.push(num & 15)
    num = num >>> 4
  }
  return ans.reverse().map((item) => {
    if (item < 10) {
      return '' + item
    } else {
      return String.fromCharCode('a'.charCodeAt(0) + item - 10)
    }
  }).join('')
}

console.log(toHex(-100))
console.log(toHex(100))

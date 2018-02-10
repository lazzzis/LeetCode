// /**
//  * @param {number} num
//  * @return {boolean}
//  */
// var isPowerOfFour = function (num) {
//   if (num === 1) return true
//   if (num < 1) return false
//   if (num % 10 !== 4 && num % 10 !== 6) return false
//   while (num !== 1) {
//     if (num % 4 !== 0) return false
//     num = Math.floor(num / 4)
//   }
//   return num === 1
// }

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  return Number.isInteger(Math.log(num) / Math.log(4))
}

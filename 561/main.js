/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let maps = {}
  for (let item of nums) {
    maps[item] = maps[item] == null ? 1 : maps[item] + 1
  }
  let sum = 0
  let flag = 0
  for (let i = -10000; i <= 10000; i++) {
    if (maps[i] == null) {
      continue
    }
    if (flag) {
      maps[i]--
    }
    sum += i * Math.ceil(maps[i] / 2)
    flag = maps[i] % 2
  }
  return sum
}

if (process.env.LZS) { // local test
  console.log(arrayPairSum([6214, -2290, 2833, -7908]))
}

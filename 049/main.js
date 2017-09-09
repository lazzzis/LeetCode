/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47,
    53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103
  ]
  const maps = {}
  const hash = function (item) {
    let product = 1
    for (const ch of item) {
      product *= primes[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
    }
    return product
  }

  strs.forEach((item) => {
    const res = hash(item)
    if (maps[res] == null) {
      maps[res] = [item]
    } else {
      maps[res].push(item)
    }
  })
  return Object.values(maps)
}

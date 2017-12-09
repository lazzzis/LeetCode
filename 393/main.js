/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
  function helper (index, data) {
    if (index === data.length) return true
    const byte = data[index]
    if (byte[0] === '0') return helper(index + 1, data)
    let ones = byte.indexOf('0')
    if (ones === -1) ones = 8
    if (ones === 1 || ones > 4) return false
    for (let i = index + 1; i < index + ones; i++) {
      if (i >= data.length) return false
      if (data[i][0] !== '1' || data[i][1] !== '0') return false
    }
    return helper(index + ones, data)
  }
  data = data.map((item) => {
    const arr = []
    for (let i = 0; i < 8; i ++) {
      arr.push(item % 2)
      item = item >> 1
    }
    return arr.reverse().join('')
  })
  return helper(0, data)
};

// https://www.youtube.com/watch?v=63i802XLgOM&index=53&list=PLH8TFsY0qnE2R9kf_9vahNY6pG9601z_4
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let cnt = 0
  const set = new Array(256).fill(0)
  for (const c of t) {
    set[c.charCodeAt(0)]++
  }
  let record = new Array(300).fill(0)
  const arr = []
  for (let i = 0; i < s.length; i++) {
    if (set[s[i].charCodeAt(0)] === 0) {
      continue
    }
    arr.push({
      index: +i,
      item: s[i]
    })
  }
  const prototype = set
  let left = 0
  let minn = Infinity
  let ansRight = 0
  for (let right = 0; right < arr.length; right++) {
    const { index, item } = arr[right]
    record[item.charCodeAt(0)]++
    if (record[item.charCodeAt(0)] <= prototype[item.charCodeAt(0)]) {
      cnt++
    }
    while (left <= right && cnt === t.length) {
      const newItem = arr[left].item
      if (minn > index - arr[left].index + 1) {
        minn = index - arr[left].index + 1
        ansRight = index + 1
      }
      left++
      record[newItem.charCodeAt(0)]--
      if (record[newItem.charCodeAt(0)] < prototype[newItem.charCodeAt(0)]) {
        cnt--
      }
    }
  }
  return minn === Infinity ? '' : s.slice(ansRight - minn, ansRight)
};

if (process.env.LZS) {
  console.log(minWindow('aa', 'aa'))
  console.log(minWindow('HH', 'H')) // x: 'YYVJHSAGAWIBU'. o:'YVJHSAGAWIBU'
  // process.exit(0)
  const assert = require('chai').assert
  const chance = new require('chance')()
  function brute (s, t) {
    const set = new Set(t.split(''))
    // console.log(set, t)
    const should = {}
    for (const c of t) {
      should[c] = should[c] == null ? 1 : should[c] + 1
    }
    let minn = Infinity
    let left = 0
    let right = 0
    for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
        if (!set.has(s[i]) || !set.has(s[j])) {
          continue
        }
        const record = {}
        for (let k = i; k <= j; k++) {
          const item = s[k]
          record[item] = record[item] == null ? 1 : record[item] + 1
        }
        let flag = true
        for (const c of set) {
          if (record[c] == null || record[c] < should[c]) {
            flag = false
            break
          }
        }
        if (flag && j - i + 1 < minn) {
          minn = j - i + 1
          left = i
          right = j + 1
        }
      }
    }
    return s.slice(left, right)
  }
  for (let _ = 0; _ < 100; _++) {
    const s = chance.string({
      pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      length: 100
    })
    const t = chance.string({
      pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      length: 1
    })
    const actual = minWindow(s, t)
    const expected = brute(s, t)
    assert.strictEqual(actual, expected, `${s} ${t} ${actual} ${expected}`)
  }
}

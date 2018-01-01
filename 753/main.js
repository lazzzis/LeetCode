/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  class Queue {
    constructor () {
      this._front = this._back = { val: null, next: null }
      this._length = 0
    }

    push (val) {
      this._back.next = {
        val,
        next: null
      }
      this._back = this._back.next
      this._length += 1
    }

    pop () {
      if (this._length === 0) {
        throw new Error('failed to pop: empty queue')
      }
      this._length -= 1
      this._front = this._front.next
      return this._front.val
    }

    top () {
      if (this._length === 0) {
        throw new Error('Failed to top: empty queue')
      }
      return this._front.next.val
    }

    get length () {
      return this._length
    }

    empty () {
      return this._length === 0
    }

    clear () {
      this._front = this._back = { val: null, next: null }
      this._length = 0
    }
  }

  const set = new Set(deadends)
  if (set.has(target)) return -1
  const q = new Queue()
  const vis = new Set()
  q.push({
    val: '0000',
    step: 0
  })
  while (!q.empty()) {
    const cur = q.pop()
    if (cur.val === target) return cur.step
    if (vis.has(cur.val) || set.has(cur.val)) continue
    vis.add(cur.val)
    for (let i = 0; i < 4; i++) {
      const next = cur.val.slice(0, i) + (cur.val[i] - '0' + 1) % 10 + cur.val.slice(i + 1)
      if (vis.has(next) || set.has(next)) continue
      q.push({
        val: next,
        step: cur.step + 1
      })
    }

    for (let i = 0; i < 4; i++) {
      const temp = cur.val[i] - '0' - 1
      const next = cur.val.slice(0, i) + (temp === -1 ? 9 : temp) % 10 + cur.val.slice(i + 1)
      if (vis.has(next) || set.has(next)) continue
      q.push({
        val: next,
        step: cur.step + 1
      })
    }
  }
  return -1
};

const set = new Set(
  ["8887","8889","8878","8898","8788","8988","7888","9888"]
)
console.log(set.has('8887'))

console.log(openLock(
  ["8887","8889","8878","8898","8788","8988","7888","9888"],
  "8888"
))

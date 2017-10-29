/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const indegrees = new Array(numCourses).fill(0)
  const c = Array.from({ length: numCourses }, () => new Set())
  for (const [from, to] of prerequisites) {
    ++indegrees[to]
    c[from].add(to)
  }
  const q = new Queue()
  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] === 0) {
      q.push(i)
    }
  }
  while (!q.empty()) {
    const cur = q.top()
    q.pop()
    for (const to of c[cur]) {
      --indegrees[to]
      if (indegrees[to] === 0) {
        q.push(to)
      }
    }
  }
  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i]) {
      return false
    }
  }
  return true
};

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

if (process.env.LZS) {
  console.log(canFinish(2, [[0, 1], [1, 0]]))
  console.log(canFinish(2, [[0, 1]]))
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const indegrees = new Array(numCourses).fill(0)
  const links = Array.from({ length: numCourses }).map(_ => [])
  // console.log(links)
  prerequisites.forEach(([second, first]) => {
    indegrees[second]++
    links[first].push(second)
  })
  const q = new Queue()
  const ans = []
  ;[...Array(numCourses).keys()].filter(i => !indegrees[i]).forEach(x => q.push(x))
  while (!q.empty()) {
    const top = q.pop()
    ans.push(top)
    links[top].forEach(x => indegrees[x]--)
    links[top].filter(x => !indegrees[x]).forEach(x => q.push(x))
  }
  return ans.length === numCourses ? ans : []
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

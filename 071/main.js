/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  path = path.split('/')
  const stack = new Stack()
  for (const item of path) {
    if (item === '..') {
      if (!stack.empty()) {
        stack.pop()
      }
    } else if (item !== '.' && item !== '') {
      stack.push(item)
    }
  }
  let s = ''
  while (!stack.empty()) {
    s = '/' + stack.pop() + s
  }
  return s === '' ? '/' : s
};

class Stack {
  constructor (vector = []) {
    this._vector = vector
  }

  pop () {
    if (this.length === 0) {
      throw new Error('Failed to pop: empty stack')
    }
    return this._vector.pop()
  }

  push (val) {
    return this._vector.push(val)
  }

  top () {
    return this._vector[this.length - 1]
  }

  get length () {
    return this._vector.length
  }

  empty () {
    return this.length === 0
  }

  clear () {
    this._vector = []
  }
}

if (process.env.LZS) {
  console.log(simplifyPath('/../../'))
  console.log(simplifyPath('/../a/'))
  console.log(simplifyPath('//'))
  console.log(simplifyPath('/a/a/'))
  console.log(simplifyPath('/a/././a/'))
  console.log(simplifyPath('/a/b/././../c'))
}

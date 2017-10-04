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

module.exports = {
  Stack
}

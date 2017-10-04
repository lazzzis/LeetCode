function defaultDictFactory (initials, defaultFactory, validator) {
  if (defaultFactory == null || typeof defaultFactory !== 'function') {
    throw new TypeError(`defaultFactory must be a function`)
  }
  if (validator != null && typeof validator !== 'function') {
    throw new TypeError(`validator must be a function`)
  } else if (validator == null) {
    validator = (prop, object) => prop in object
  }
  return new Proxy(initials, {
    get: function (target, prop) {
      if (!validator(prop, target)) {
        target[prop] = defaultFactory(prop, target)
      }
      return target[prop]
    }
  })
}

const d = defaultDictFactory({}, () => 1, (prop, target) => target[prop] !== 7)
d.a = 7
// console.log(d.a)

const obj = new Proxy({}, {
  get: function (target, prop) {
    console.log(target, prop)
    return target[prop]
  }
})

obj.foo = 1
console.log(obj['bar'])

const words = ['hello', 'hello', 'world', 'please', 'say', 'say', 'say']
const defaultDict = defaultDictFactory({}, () => 1, 1)
for (const word of words) {
  defaultDict[word]++
}
console.log(Object.entries(defaultDict))
/*
[ [ 'hello', 7 ], [ 'world', 6 ], [ 'please', 7 ], [ 'say', 6 ] ]
*/

module.exports = defaultDictFactory

// call、apply、bind原理

function person(a, b, c, d, e) {
  console.log(this.name, a, b, c, d, e)
}
let obj = {
  name: 'zh',
}
Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Errot')
  }
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  let result = context.fn(...args)
  delete context.fn
  return result
}
person.myCall(obj, 1, 2, 3, 4)

Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  let result = undefined
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
person.myApply(obj, [1, 2, 3, 4])

Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let that = this
  let args = [...arguments].slice(1)
  return function () {
    return that.myApply(context, args.concat([...arguments]))
  }
}
person.myBind(obj, 1, 2, 3, 4)(5)

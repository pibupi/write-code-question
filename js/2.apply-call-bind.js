// call、apply、bind原理

function person(a, b, c, d) {
  console.log(this.name, a, b, c, d)
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
  return result
}
// person.myCall(obj, 1, 2, 3, 4)

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
  return result
}
// person.myApply(obj, [1, 2, 3, 4])

Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let that = this
  let args = [...arguments].slice(1)
  // let arr = [...arguments].slice()
  // console.log(arr)
  return function () {
    console.log([...arguments])
    return that.myApply(context, args.concat(arr))
  }
}
person.myBind(obj, 1, 2, 3, 4)(5)

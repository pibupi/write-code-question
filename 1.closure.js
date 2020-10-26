// 此问题涉及到作用域延长，嵌套函数，引用，this隐式绑定丢失，全局 or 局部变量
function count() {
  let count = 0
  function doCounter() {
    if (count === 10) {
      clearInterval(timer)
      return
    }
    count++
    console.log(count)
  }
  return doCounter
}
let fn = count()
let timer = setInterval(() => {
  fn()
}, 1000)

// this丢失原理扩展
// class AA {
//   constructor() {
//     // console.log(this)
//   }
//   static aa() {
//     console.log(this)
//   }
// }
// let fn = AA.aa
// fn()
// class Foo {
//   constructor(name) {
//     this.name = name
//   }

//   display() {
//     console.log(this.name)
//   }
// }

// var foo = new Foo('Saurabh')
// foo.display() // Saurabh

// //下面的赋值操作模拟了上下文的丢失。
// //与实际在 React Component 中将处理程序作为 callback 参数传递相似。
// var display = foo.display
// display() // TypeError: this is undefined

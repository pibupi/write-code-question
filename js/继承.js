// 寄生组合继承
function Super(foo) {
  this.foo = foo
}
Super.prototype.printFoo = function() {
  console.log(this.foo)
}
function Sub(bar) {
  this.bar = bar
  Super.call(this)
}
Sub.prototype = Object.create(Super.prototype)
Sub.prototype.constructor = Sub
//  ES6版继承
class Super {
  constructor(foo) {
    this.foo = foo
  }
  printFoo() {
    console.log(this.foo)
  }
}
class Sub extends Super {
  constructor(foo, bar) {
    super(foo)
    this.bar = bar
  }
}
// ES5的继承，实质是先创造子类的实例对象，然后将再将父类的方法添加到this上。 ES6的继承，先创造父类的实例对象
// （所以必须先调用super方法，然后再用子类的构造函数修改this
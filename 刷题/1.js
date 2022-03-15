// 如何做，才能打印出 执行？
// var a = ?
// if(a ==1 && a ==2 && a ==3){
// console.log('执行');
// }

// 分析：
// ‘==’ 比较时有4条规则：
// 1.对象转为字符串
// 2.unll 和 undefined相等，它俩和其它都不相等
// 3.NaN 和 任何都不相等
// 4.其余的都转为数字

// 数学运算时先调用valueOf, 没有的话调用toString
// 所有JS数据类型都拥有这两个方法，null除外
// 总结：valueOf偏向于运算，toString偏向于显示。
// 1、 在进行对象转换时（例如:alert(a)）,将优先调用toString方法，如若没有重写toString将调用valueOf方法，如果两方法都不没有重写，但按Object的toString输出。
// 2、 在进行强转字符串类型时将优先调用toString方法，强转为数字时优先调用valueOf。
// 3、 在有运算操作符的情况下，valueOf的优先级高于toString。

// 一、转为字符串
// 1.toString
// let i = 0
// var a = {
//   toString() {
//     return ++i
//   },
// }
// if (a == 1 && a == 2 && a == 3) {
//   console.log("执行")
// }

// 2.valueOf
// let i = 0
// var a = {
//   valueOf() {
//     return ++i
//   },
// }
// if (a == 1 && a == 2 && a == 3) {
//   console.log("执行")
// }

// 3.改变toString为shift
// var a = [1,2,3]
// a.toString = a.shift
// if (a == 1 && a == 2 && a == 3) {
//   console.log("执行")
// }

// 二、数据劫持
// 1.defineProperty
var i = 0
Object.defineProperty(global, "a", {
  get() {
    return ++i
  },
})
if (a == 1 && a == 2 && a == 3) {
  console.log("执行")
}
// 2.proxy

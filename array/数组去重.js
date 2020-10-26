// 一、去重
var t = [90, 8, 34, 8, 2, 39, 90, 87, 34, 22, 10]
// set
var d = Array.from(new Set(t))
// console.log(d)
// indexOf
let arr = []
for (var i = 0; i < t.length; i++) {
  if (arr.indexOf(t[i]) === -1) {
    arr.push(t[i])
  }
}
// console.log(arr)
// 利用对象属性
var obj = {}
var newArr = []
for (let i = 0; i < t.length; i++) {
  if (!obj[t[i]]) {
    obj[t[i]] = t[i] // 这个赋值随便写就行
    newArr.push(t[i])
  }
}
// console.log(newArr)
// Array.prototype.includes
var newArr2 = []
for (let i = 0; i < t.length; i++) {
  if (!newArr2.includes(t[i])) {
    newArr2.push(t[i])
  }
}
// console.log(newArr2)
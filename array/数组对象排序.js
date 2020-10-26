// 三、数组对象排序
function compare(prop) {
  return function (a, b) {
    let value1 = a[prop]
    let value2 = b[prop]
    return value1 - value2
  }
}
let arr2 = [
  { name: 'zopp', age: 10 },
  { name: 'gpp', age: 18 },
  { name: 'yjj', age: 8 },
]
arr2.sort(compare('age'))

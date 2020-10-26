// 四、扁平化
// flat
let arr3 = [1, 2, [4, 5, [6, 7]]]
let arr4 = arr3.flat(Infinity)
// console.log(arr4)
// 递归
let result = []
function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (Array.isArray(item)) {
      flatten(item)
    } else {
      result.push(item)
    }
  }
  return result
}
// console.log(flatten(arr3))
// 扩展运算符
function flatten2(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
// console.log(flatten2(arr3))

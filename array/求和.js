// 六、求和
// for循环
let arr5 = [1, 2, 3, 4, 5]
let num = 0
for (let i = 0; i < arr5.length; i++) {
  num += arr5[i]
}
console.log(num)
// 递归
function sum(arr) {
  var len = arr.length
  if (len == 0) {
    return 0
  } else if (len == 1) {
    return arr[0]
  } else {
    return arr[0] + sum(arr.slice(1))
  }
}
console.log(sum([2, 3, 4, 5]))
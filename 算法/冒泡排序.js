//冒泡排序
var t = [90, 8, 34, 8, 2, 39, 90, 87, 34, 22, 10]
for (var i = 0; i < t.length - 1; i++) {
  for (var k = 0; k < t.length - 1 - i; k++) {
    if (t[k] > t[k + 1]) {
      var temp = t[k]
      t[k] = t[k + 1]
      t[k + 1] = temp
    }
  }
}
console.log(t)

//es6冒泡排序
var arr = [90, 8, 34, 8, 2, 39, 90, 87, 34, 22, 10]
function bubleSort2(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var k = 0; k < arr.length - 1 - i; k++) {
      if (arr[k] > arr[k + 1]) {
        ;[arr[k], arr[k + 1]] = [arr[k + 1], arr[k]]
      }
    }
  }
  return arr
}
console.log(bubleSort2(arr))

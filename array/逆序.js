//数组反序
var t = [90, 8, 34, 8, 2, 39, 90, 87, 34, 22, 10]
for (var i = 0; i < t.length / 2; i++) {
  var temp = t[i]
  t[i] = t[t.length - 1 - i]
  t[t.length - 1 - i] = temp
}
console.log(t)

// 数组逆序
var t = [90, 8, 34, 8, 2, 39, 90, 87, 34, 22, 10]
console.log(t.reverse)

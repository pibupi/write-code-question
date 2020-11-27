//数组最小值及索引
var t = [90, 8, 34, 8, 2, 39, 90, 87, 34, 22, 10]
let min = t[0],
  minIndex = 0
for (var i = 0; i < t.length; i++) {
  if (min > t[i]) {
    min = t[i]
    minIndex = i
  }
}

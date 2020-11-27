//字符串出现最多的次数和长度
var t = 'abcdabkddabdaabbaa'
let obj = {}
for (var i = 0; i < t.length; i++) {
  let str = t[i]
  if (str in obj) {
    obj[str] += 1
  } else {
    obj[str] = 1
  }
}
let max = 0,
  maxstr
for (var k in obj) {
  if (obj[k] > max) {
    max = obj[k]
    maxstr = k
  }
}
console.log(max, maxstr)

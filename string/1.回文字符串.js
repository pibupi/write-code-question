//判断是否是回文字符串
let str = 'abba'
function huiwen(str) {
  return str.split(',').reverse().join('') === str
}
console.log(huiwen(str))

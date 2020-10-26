// 二、随机排序
// 交换位置
for (let i = 0; i < t.length; i++) {
  let rc = parseInt(Math.random() * t.length)
  const empty = t[i]
  t[i] = t[rc]
  t[rc] = empty
}
// console.log(t)
// sort
t.sort(function (a, b) {
  return Math.random() - 0.5
})
// console.log(t)
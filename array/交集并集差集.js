// 五、交集/并集/差集
let a = [1, 2, 3]
let b = [2, 4, 5]
// includes 方法结合 filter 方法
// 并集
let union = a.concat(b.filter((v) => !a.includes(v)))
console.log(union)
// 交集
let intersection = a.filter((v) => b.includes(v))
console.log(intersection)
// 差集
let difference = a.concat(b).filter((v) => !a.includes(v) || !b.includes(v))
console.log(difference)
// ES6 的 Set 数据结构
let c = new Set([1, 2, 3])
let e = new Set([2, 4, 5])
// 并集
let union2 = new Set([...c, ...e])
let intersect2 = new Set([...c].filter((x) => e.has(x)))
let difference2 = new Set([...c].filter((x) => !e.has(x)))
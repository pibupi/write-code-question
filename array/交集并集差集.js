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
// // ES6 的 Set 数据结构
// let c = new Set([1, 2, 3])
// let e = new Set([2, 4, 5])
// // 并集
// let union2 = new Set([...c, ...e])
// let intersect2 = new Set([...c].filter((x) => e.has(x)))
// let difference2 = new Set([...c].filter((x) => !e.has(x)))

// let a = new Set([1, 2, 3])
// let b = new Set([4, 3, 2])

// // Set实现
// // 并集
// let union = new Set([...a, ...b])
// // Set {1, 2, 3, 4}

// // 交集
// let intersect = new Set([...a].filter((x) => b.has(x)))
// console.log(intersect)
// // set {2, 3}

// // 差集
// let difference = new Set([...a].filter((x) => !b.has(x)))
// // Set {1}
// console.log(difference)

let a = [1, 2, 3]
let b = [2, 3, 4]
// 并集
let c = Array.from(new Set([...a, ...b]))
console.log(c)
// 交集
let d = a.filter((v) => new Set(b).has(v))
console.log(d)
// 差集
let e = [...a, ...b].filter((v) => !new Set(b).has(v) || !new Set(a).has(v))
console.log(e)

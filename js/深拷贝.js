// 深拷贝
// // 递归的完整版本（考虑到了Symbol属性）：
// const cloneDeep1 = (target, hash = new WeakMap()) => {
//   // 对于传入参数处理
//   if (typeof target !== "object" || target === null) {
//     return target
//   }
//   // 哈希表中存在直接返回
//   if (hash.has(target)) return hash.get(target)

//   const cloneTarget = Array.isArray(target) ? [] : {}
//   hash.set(target, cloneTarget)

//   // 针对Symbol属性
//   const symKeys = Object.getOwnPropertySymbols(target)
//   if (symKeys.length) {
//     symKeys.forEach((symKey) => {
//       if (typeof target[symKey] === "object" && target[symKey] !== null) {
//         cloneTarget[symKey] = cloneDeep1(target[symKey])
//       } else {
//         cloneTarget[symKey] = target[symKey]
//       }
//     })
//   }

//   for (const i in target) {
//     if (Object.prototype.hasOwnProperty.call(target, i)) {
//       cloneTarget[i] =
//         typeof target[i] === "object" && target[i] !== null
//           ? cloneDeep1(target[i], hash)
//           : target[i]
//     }
//   }
//   return cloneTarget
// }
// 第二种写法
function checkType(any) {
  return Object.prototype.toString.call(any).slice(8, -1)
}

function clone(any) {
  switch (checkType(any)) {
    case "Object":
      // 拷贝对象
      let o = {}
      // 这里面的return, 只会停止当前的clone执行，for循环还是会继续执行的
      for (let key in any) {
        o[key] = clone(any[key])
      }
      return o
    case "Array":
      // 拷贝数组
      // return any.map((item) => clone(item))
      var arr = []
      for (let i = 0, leng = any.length; i < leng; i++) {
        arr[i] = clone(any[i])
      }
      return arr
    case "Function":
      // 拷贝函数
      return new Function("return " + any.toString()).call(this)
    case "Date":
      // 拷贝日期
      return new Date(any.valueOf())
    case "RegExp":
      // 拷贝正则
      return new RegExp(any)
    case "Map":
      // 拷贝Map 集合
      let m = new Map()
      any.forEach((v, k) => {
        m.set(k, clone(v))
      })
      return m
    case "Set":
      // 拷贝Set 集合
      let s = new Set()
      for (let val of any.values()) {
        s.add(clone(val))
      }
      return s
    case "Symbol":
      // 拷贝symbol
      return Symbol.for(any.description)
    default:
      return any
  }
}
let obj = {
  name: "zh",
  c: function (param) {
    let a = 1
    console.log(param)
  },
  q: [1, 2, 3],
  qqq: ["1", "2", "3"],
  ff: {
    ee: 222,
  },
  gg: {
    hh: {
      kk: ["2", 2, { a: 6 }],
    },
  },
  d: new Date(),
  e: /a/g,
  f: Symbol("22"),
}
let obj2 = clone(obj)
console.log(obj.c === obj2.c)
console.dir(obj.ff === obj2.ff)
console.dir(obj.qqq === obj2.qqq)
console.dir(obj.gg.hh.kk === obj2.gg.hh.kk)
console.dir(obj.gg.hh.kk[2] === obj2.gg.hh.kk[2])
console.dir(obj)
console.dir(obj2)
console.dir(obj.c("obj"))
console.dir(obj2.c("obj2"))

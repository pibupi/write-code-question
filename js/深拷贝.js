// 深拷贝
// 递归的完整版本（考虑到了Symbol属性）：
const cloneDeep1 = (target, hash = new WeakMap()) => {
  // 对于传入参数处理
  if (typeof target !== 'object' || target === null) {
    return target
  }
  // 哈希表中存在直接返回
  if (hash.has(target)) return hash.get(target)

  const cloneTarget = Array.isArray(target) ? [] : {}
  hash.set(target, cloneTarget)

  // 针对Symbol属性
  const symKeys = Object.getOwnPropertySymbols(target)
  if (symKeys.length) {
    symKeys.forEach((symKey) => {
      if (typeof target[symKey] === 'object' && target[symKey] !== null) {
        cloneTarget[symKey] = cloneDeep1(target[symKey])
      } else {
        cloneTarget[symKey] = target[symKey]
      }
    })
  }

  for (const i in target) {
    if (Object.prototype.hasOwnProperty.call(target, i)) {
      cloneTarget[i] =
        typeof target[i] === 'object' && target[i] !== null
          ? cloneDeep1(target[i], hash)
          : target[i]
    }
  }
  return cloneTarget
}
// 第二种写法
function deepClone(origin, target) {
  target = target || {}
  for (let key in origin) {
    if (origin.hasOwnProperty(key)) {
      if (Array.isArray(origin[key])) {
        target[key] = []
        deepClone(origin[key], target[key])
      } else if (
        Object.prototype.toString.call(origin[key]).slice(8, -1) === 'object'
      ) {
        target[key] = {}
        deepClone(origin[key], target[key])
      } else {
        target[key] = origin[key]
      }
    }
  }
  return target
}
let obj = {
  name: 'zh',
}
let obj2 = deepClone(obj)
console.log(obj === obj2)

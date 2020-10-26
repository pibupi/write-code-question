// 一、去重
var t = [90, 8, 34, 8, 2, 39, 90, 87, 34, 22, 10]
// set
var d = Array.from(new Set(t))
// console.log(d)
// indexOf
let arr = []
for (var i = 0; i < t.length; i++) {
  if (arr.indexOf(t[i]) === -1) {
    arr.push(t[i])
  }
}
// console.log(arr)
// 利用对象属性
var obj = {}
var newArr = []
for (let i = 0; i < t.length; i++) {
  if (!obj[t[i]]) {
    obj[t[i]] = t[i] // 这个赋值随便写就行
    newArr.push(t[i])
  }
}
// console.log(newArr)
// Array.prototype.includes
var newArr2 = []
for (let i = 0; i < t.length; i++) {
  if (!newArr2.includes(t[i])) {
    newArr2.push(t[i])
  }
}
// console.log(newArr2)

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

// 三、数组对象排序
function compare(prop) {
  return function (a, b) {
    let value1 = a[prop]
    let value2 = b[prop]
    return value1 - value2
  }
}
let arr2 = [
  { name: 'zopp', age: 10 },
  { name: 'gpp', age: 18 },
  { name: 'yjj', age: 8 },
]
arr2.sort(compare('age'))

// 四、扁平化
// flat
let arr3 = [1, 2, [4, 5, [6, 7]]]
let arr4 = arr3.flat(Infinity)
// console.log(arr4)
// 递归
let result = []
function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (Array.isArray(item)) {
      flatten(item)
    } else {
      result.push(item)
    }
  }
  return result
}
// console.log(flatten(arr3))
// 扩展运算符
function flatten2(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
// console.log(flatten2(arr3))

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
// 六、求和
// for循环
let arr5 = [1, 2, 3, 4, 5]
let num = 0
for (let i = 0; i < arr5.length; i++) {
  num += arr5[i]
}
console.log(num)
// 递归
function sum(arr) {
  var len = arr.length
  if (len == 0) {
    return 0
  } else if (len == 1) {
    return arr[0]
  } else {
    return arr[0] + sum(arr.slice(1))
  }
}
console.log(sum([2, 3, 4, 5]))
// reduce
// 七、类数组转化
// 八、数组转化为树形结构
let arr6 = [
  {
    id: 1,
    name: '1',
    pid: 0,
  },
  {
    id: 2,
    name: '1-1',
    pid: 1,
  },
  {
    id: 3,
    name: '1-1-1',
    pid: 2,
  },
  {
    id: 4,
    name: '1-2',
    pid: 1,
  },
  {
    id: 5,
    name: '1-2-2',
    pid: 4,
  },
  {
    id: 6,
    name: '1-1-1-1',
    pid: 3,
  },
  {
    id: 7,
    name: '2',
  },
]
function toTree(data, parentId = 0) {
  var itemArr = []
  for (var i = 0; i < data.length; i++) {
    var node = data[i]
    if (node.pid === parentId) {
      var newNode = {
        ...node,
        name: node.name,
        id: node.id,
        children: toTree(data, node.id),
      }
      itemArr.push(newNode)
    }
  }
  return itemArr
}

console.log(toTree(arr6))

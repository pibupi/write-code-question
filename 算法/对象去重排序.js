// 对象去重
let arr3 = [
  { name: 'e', value: 1 },
  { name: 'f', value: 2 },
  { name: 'a', value: 2 },
  { name: 'b', value: 3 },
]
let mergeArr2 = []
let obj2 = {}
arr3.forEach((v) => {
  if (!obj2[v.value]) {
    obj2[v.value] = v.value
    mergeArr2.push(v)
  }
})
console.log(mergeArr2)

// 数组合并、去重、排序
let arr1 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }]
let arr2 = [{ a: 5 }, { a: 6 }, { a: 7 }, { a: 8 }, { a: 10 }]
// 实现方式：
let mergeArr = [...arr1, ...arr2]
let middArr = []
let obj = {}
mergeArr.forEach((v) => {
  if (!obj[v.a]) {
    obj[v.a] = v.a
    middArr.push(v)
  }
})
let resultArr = middArr.sort((a, b) => {
  return a - b
})
console.log(resultArr)

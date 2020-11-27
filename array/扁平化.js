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

let arr = [1, 2, ['2', '1', 3, [4, 5, 6, [5, 6]]]]
function flat(arr) {
  let result = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flat(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

function flat2(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flat2(next) : next)
  }, [])
}

function flat3(arr) {
  return arr
    .toString()
    .split(',')
    .map((item) => {
      return +item
    })
}

function flat4(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(arr)
  }
  return arr
}

function unquel(arr) {
  return new Set(arr)
}

function unquel2(arr) {
  arr.sort()
  let result = [arr[0]]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== result[result.length - 1]) {
      result.push(arr[i])
    }
  }
  return result
}
console.log(flat4(arr))
console.log(unquel2(flat4(arr)))

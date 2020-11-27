//快速排序
var arr = [90, 8, 34, 8, 2, 39, 90, 87, 34, 22, 10]
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let left = [],
    right = [],
    current = arr.splice(0, 1)
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(current, quickSort(right))
}

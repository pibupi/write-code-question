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

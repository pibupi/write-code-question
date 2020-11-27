// 参考资料 https://segmentfault.com/q/1010000013483988


let treeData = [
  {
    id: 1,
    sub: [
      {
        id: 2,
        sub: [
          {
            id: 12,
            sub: [
              {
                id: 13
              },
              {
                id: 14
              }
            ]
          },
          {
            id: 3,
            sub: [
              {
                id: 4,
              },
              {
                id: 9,
                sub: [
                  {
                    id: 10,
                  },
                  {
                    id: 11
                  }
                ]
              }
            ]
          },
          {
            id: 7,
            sub: [
              { id: 8 },
            ]
          }
        ]
      },
      {
        id: 5,
        sub: [
          { id: 6 },
        ]
      }
    ]
  },
  {
    id: 100
  }
]

let currentId = 3  // 当前id // 只能获取到父节点
// let currentId = 10  // 当前id
let arr = [] // 定义数组，存放当前id的直系父ids
function getParentsIds (data) {
  for (let i = 0; i < data.length; i++) {
    let temp = data[i]
    if (temp.id == currentId) {
      arr.push(temp.id);
      return 1
    }
    if (temp && temp.sub && temp.sub.length > 0) {
      let t = getParentsIds(temp.sub)
      if (t == 1) {
        arr.push(temp.id)
        return 1
      }
    }
  }
}
getParentsIds(treeData)
console.log('获取所有父节点',arr)

// const getParent = (data, target) => {

//   const get = (children, target, record = []) => (
//     children.reduce((result, { label, children: innerChildren }) => {
//       if (label === target) {
//         return [...record, target]
//       }
//       if (innerChildren) {
//         return [...result, ...get(innerChildren, target, [...record, label])]
//       }
//       return result
//     }, []))

//   return get(data, target).join('-')
// }

// // 一级 2-二级 2-1-三级 3-1-2
// const str = getParent(data, '三级 3-1-2')
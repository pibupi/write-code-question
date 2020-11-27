let parent=[
  {name:'文件夹1',pid:0,id:1},
  {name:'文件夹2',pid:0,id:2},
  {name:'文件夹3',pid:0,id:3},
  {name:'文件夹1-1',pid:1,id:4},
  {name:'文件夹2-1',pid:2,id:5},
]
let child=[
      {name:'文件1',pid:1,id:10001},
      {name:'文件2',pid:1,id:10002},
      {name:'文件2-1',pid:2,id:10003},
      {name:'文件2-2',pid:2,id:10004},
      {name:'文件1-1-1',pid:4,id:10005},
      {name:'文件2-1-1',pid:5,id:10006}
]

let AllData = [...parent,...child]
// console.log(AllData)

// {1:{ name: '文件夹1', pid: 0, id: 1 }} // 将id提出，生成一个引射表
let treeMapList = AllData.reduce((memo, current) => {
  memo[current['id']] = current
  return memo
}, {})
// console.log(treeMapList)

let result = AllData.reduce((arr, current) => {
  let pid = current.pid
  let parent = treeMapList[pid]
  if (parent) {
    parent.children ? parent.children.push(current) : parent.children = [current]
  } else if(pid===0) { // 这是文件夹
    arr.push(current)
  }
  return arr
},[])
console.log(result)
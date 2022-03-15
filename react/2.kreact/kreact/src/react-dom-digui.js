// * vnode
// type 原生标签 stirng
//      文本标签 没有type
//      函数组件 函数
// props 属性  className  href  id  children
// *

// 判断节点能不能复用有俩个依据：
// 1. type是否相等（是否是同一种类型的节点）
// 2. key标识了当前节点在当前层级下的唯一性


// fiber结构
// stateNode 原生标签dom节点
// child  第一个子节点 fiber
// index  当前层级下的下标
// key  唯一性
// sibling 下一个兄弟节点 fiber
// return  父节点 fiber
// type  类型
// props 属性
// 
/**
 * @param {*} vnode 虚拟dom
 * @param {*} container 容器
 */
function render(vnode, container) {
  console.log("vnode", vnode)
  const node = createNode(vnode)
  container.appendChild(node)
}

function isStringOrNumber(sth) {
  return typeof sth === "string" || typeof sth === "number"
}

// 根据虚拟dom，生成真实dom
// 重要的是节点类型：渲染方式不同
function createNode(vnode) {
  let node
  const { type } = vnode
  // example:  { type: 'h1' }
  if (typeof type === "string") {
    // 原生标签节点
    node = updateHostComponent(vnode)
  } else if (isStringOrNumber(vnode)) {
    // 文本节点
    node = updateTextComponent(vnode)
  } else if (typeof type === "function") {
    // 函数组件和类组件都是function，在Component上挂在一个isReactComponent属性用来标识是类组件即可
    node = type.prototype.isReactComponent
      ? updateClassComponent(vnode)
      : updateFunctionComponent(vnode)
  } else {
    // Fragment
    node = updateFragmentComponent(vnode)
  }
  return node
}

// 添加属性：className、id、href
// 源码中复杂：如style、合成事件
function updateNodeProps(node, nextVal) {
  Object.keys(nextVal)
    .filter((k) => k !== "children")
    .forEach((k) => {
      node[k] = nextVal
    })
}

// 原生标签节点div、a、h1
function updateHostComponent(vnode) {
  const { type, props } = vnode
  const node = document.createElement(type)
  updateNodeProps(node, props)
  reconcileChildren(node, props.children)
  return node
}

function updateTextComponent(vnode) {
  const node = document.createTextNode(vnode)
  return node
}

function updateFunctionComponent(vnode) {
  // 函数组件type值就是一个function，执行它返回的就是jsx，并把prop传入做处理
  const { type, props } = vnode
  const child = type(props)
  const node = createNode(child)
  return node
}

function updateClassComponent(vnode) {
  const { type, props } = vnode
  // 实例化时需要传入prop，并在Component上绑定到this上才行
  const instance = new type(props)
  // 调用类组件的render方法获得jsx
  const child = instance.render()
  const node = createNode(child)
  return node
}

function updateFragmentComponent(vnode) {
  // ! 源码中并没有使用createDocumentFragment, 而是直接处理子节点
  const node = document.createDocumentFragment()
  reconcileChildren(node, vnode.props.children)
  return node
}

// 遍历子节点，子节点是vnode,转换成node,插入到parentNode
function reconcileChildren(parentNode, children) {
  // children可能为string、array,这里做一层处理，统一为数组
  const newChildren = Array.isArray(children) ? children : [children]
  for (let i = 0; i < newChildren.length; i++) {
    let child = newChildren[i]
    render(child, parentNode)
  }
}

export default { render }

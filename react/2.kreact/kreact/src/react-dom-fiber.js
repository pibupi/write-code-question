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
let wipRoot = null
function render(vnode, container) {
  wipRoot = {
    type: "div",
    props: {
      children: { ...vnode },
    },
    stateNode: container,
  }
  nextUnitOfWork = wipRoot
}

function isStringOrNumber(sth) {
  return typeof sth === "string" || typeof sth === "number"
}

// 根据虚拟dom，生成真实dom
// 重要的是节点类型：渲染方式不同
function createNode(workInProgress) {
  const { type, props } = workInProgress
  let node = document.createElement(type)
  updateNodeProps(node, props)
  return node
}

// 添加属性：className、id、href
// 源码中复杂：如style、合成事件
function updateNodeProps(node, nextVal) {
  Object.keys(nextVal).forEach((k) => {
    if (k === "children") {
      if (isStringOrNumber(nextVal[k])) {
        node.textContent = nextVal[k] + ""
      }
    } else {
      node[k] = nextVal[k]
    }
  })
}

// 原生标签节点div、a、h1
function updateHostComponent(workInProgress) {
  if (!workInProgress.stateNode) {
    // 创建dom节点
    workInProgress.stateNode = createNode(workInProgress)
  }
  // 协调子节点
  reconcileChildren(workInProgress, workInProgress.props.children)
  console.log("workInProgress", workInProgress)
}

// 函数组件拿到子节点，协调
function updateFunctionComponent(workInProgress) {
  const { type, props } = workInProgress
  const child = type(props)
  reconcileChildren(workInProgress, child)
}

function updateClassComponent(workInProgress) {
  const { type, props } = workInProgress
  const instance = new type(props)
  const child = instance.render()
  reconcileChildren(workInProgress, child)
}

function updateFragmentComponent(workInProgress) {
  reconcileChildren(workInProgress, workInProgress.props.children)
}

// 协调子节点
function reconcileChildren(workInProgress, children) {
  if (isStringOrNumber(children)) return
  // children可能为string、array,这里做一层处理，统一为数组
  const newChildren = Array.isArray(children) ? children : [children]
  // 记录上一个Fiber节点
  let previousNewFiber = null
  for (let i = 0; i < newChildren.length; i++) {
    let child = newChildren[i]
    let newFiber = {
      type: child.type,
      props: { ...child.props },
      child: null,
      sibling: null,
      return: workInProgress,
      stateNode: null,
    }
    if (i === 0) {
      workInProgress.child = newFiber
    } else {
      previousNewFiber.sibling = newFiber
    }
    previousNewFiber = newFiber
  }
}

// 下一个要渲染更新的任务
let nextUnitOfWork = null
// workInProgress 当前正在工作的fiber
function performUnitOfWork(workInProgress) {
  // step1: 渲染更新fiber
  const { type } = workInProgress
  if (typeof type === "string") {
    // 原生标签节点
    updateHostComponent(workInProgress)
  } else if (typeof type === "function") {
    type.prototype.isReactComponent
      ? updateClassComponent(workInProgress)
      : updateFunctionComponent(workInProgress)
  } else {
    updateFragmentComponent(workInProgress)
  }

  // step2: 返回下一个
  // 有长子
  if (workInProgress.child) {
    return workInProgress.child
  }
  let nextFiber = workInProgress
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.return
  }
}

function workLoop(IdleDeadline) {
  while (nextUnitOfWork && IdleDeadline.timeRemaining() > 1) {
    // 渲染更新fiber, 并且返回以下个
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
  }
  // commit
  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }
}

requestIdleCallback(workLoop)

function commitRoot() {
  commitWorker(wipRoot.child)
  wipRoot = null
}

function commitWorker(workInProgress) {
  if (!workInProgress) return
  // step1 渲染更新自己
  let parentNodeFiber = workInProgress.return
  // fiber节点不一定有dom节点，比如fragment、consumer
  while (!parentNodeFiber.stateNode) {
    parentNodeFiber = parentNodeFiber.return
  }
  let parentNode = parentNodeFiber.stateNode
  if (workInProgress.stateNode) {
    parentNode.appendChild(workInProgress.stateNode)
  }
  // step2 渲染更新子节点
  commitWorker(workInProgress.child)
  // step3 渲染更新sibling
  commitWorker(workInProgress.sibling)
}

export default { render }

const randomKey = Math.random().toString(36).slice(2)

export const internalEventHandlersKey = "__reactEvents$" + randomKey
export const internalInstanceKey = "__reactFiber$" + randomKey
export const internalPropsKey = "__reactProps$" + randomKey

// 从真实DOM节点找到fiber实例
export function getClosestInstanceFromNode(targetNode) {
  return targetNode[internalInstanceKey]
}
// 从真实DOM节点找到属性对象
export function getFiberCurrentPropsFromNode(targetNode) {
  return targetNode[internalPropsKey]
}

export function getEventListenerSet(node) {
  // 给Dom元素上放一个set集合用来存放监听的事件
  let elementListenerSet = node[internalEventHandlersKey]
  if (!elementListenerSet) {
    elementListenerSet = node[internalEventHandlersKey] = new Set()
  }
  return elementListenerSet
}

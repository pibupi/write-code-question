import {
  getClosestInstanceFromNode,
  getFiberCurrentPropsFromNode,
} from "./ReactDOMComponentTree"
import { dispatchEventForPluginEventSystem } from "./DOMPluginEvnentSystem"
import { batchedEventUpdates } from "./ReactDOMUpdateBatching"
/**
 * 真正执行派发
 * @param {*} domEventName 事件名click
 * @param {*} eventSystemFlags 事件系统标识 0 4
 * @param {*} targetContainer 目标容器
 * @param {*} nativeEvent 事件真正触发的时候，传递过来的原生浏览器事件对象
 */

export function dispatchEvent(
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  console.log("domEventName", domEventName)
  console.log("eventSystemFlags", eventSystemFlags)
  console.log("targetContainer", targetContainer)
  console.log("nativeEvent", nativeEvent)
  // 获取原生的事件源
  let nativeEventTarget = nativeEvent.target || nativeEvent.srcElement || window
  // 获取fiber实例
  let targetInst = getClosestInstanceFromNode(nativeEventTarget)
  console.log("targetInst", targetInst)
  let props = getFiberCurrentPropsFromNode(nativeEventTarget)
  console.log("props", props)
  batchedEventUpdates(() => {
    dispatchEventForPluginEventSystem(
      domEventName,
      eventSystemFlags,
      nativeEvent,
      targetInst,
      targetContainer
    )
  })
}

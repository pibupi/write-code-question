import { allNativeEvents } from "./EventRegistry"
import * as SimpleEventPlugin from "./SimpleEventPlugin"
import { getEventListenerSet } from "./ReactDOMComponentTree"
import { IS_CAPTURE_PHASE } from "./EventSystemFlags"
import {
  addEventBubbleListener,
  addEventCaptureListener,
} from "./EventListener"
import { dispatchEvent } from "./ReactDOMEventLIstener"
import { HostComponent } from "./ReactWorkTags"
import getListener from "./getListener"

SimpleEventPlugin.registerEvents()
// 有些事件只有捕获，没有冒泡
export const noDelegateEvents = new Set(["scroll"]) // 不需要委托代理的

export function listenToAllSupportedEvents(container) {
  allNativeEvents.forEach((domEventName) => {
    console.log(domEventName)
    if (!noDelegateEvents.has(domEventName)) {
      // 监听container的冒泡阶段domEventName(click)事件
      listenToNativeEvent(domEventName, false, container)
    }
    // 监听捕获事件
    listenToNativeEvent(domEventName, true, container)
  })
}

function listenToNativeEvent(
  domEventName,
  isCapturePhaseListener,
  rootContainerElement,
  eventSystemFlags = 0 // 事件系统标识
) {
  // 同一个容器上的同一个阶段的同一个事件只绑定一次
  let listenerSet = getEventListenerSet(rootContainerElement)
  let listenerSetKey = getListenerSetKey(domEventName, isCapturePhaseListener)
  if (!listenerSet.has(listenerSetKey)) {   
    // 如果没有绑定过，就添加上这个key
    if (isCapturePhaseListener) {
      eventSystemFlags |= IS_CAPTURE_PHASE // let a = 1; a+=2
    }
    addTrappedEventListener(
      rootContainerElement,
      domEventName,
      eventSystemFlags,
      isCapturePhaseListener
    )
    listenerSet.add(listenerSetKey)
  }
}

function addTrappedEventListener(
  rootContainerElement,
  domEventName,
  eventSystemFlags,
  isCapturePhaseListener
) {
  let listener = dispatchEvent.bind(
    null,
    domEventName,
    eventSystemFlags,
    rootContainerElement
  )
  if (isCapturePhaseListener) {
    addEventCaptureListener(rootContainerElement, domEventName, listener)
  } else {
    addEventBubbleListener(rootContainerElement, domEventName, listener)
  }
}

function getListenerSetKey(domEventName, isCapturePhaseListener) {
  // click_capture   click_bubble
  return `${domEventName}__${isCapturePhaseListener ? "capture" : "bubble"}`
}

export function dispatchEventForPluginEventSystem(
  domEventName,
  eventSystemFlags,
  nativeEvent,
  targetInst,
  targetContainer
) {
  let nativeEventTarget = nativeEvent.target
  const dispatchQueue = []
  // 由插件来提取事件处理函数
  // 由插件来填充这个dispatchQueue数组
  SimpleEventPlugin.extractEvents(
    dispatchQueue,
    domEventName,
    targetInst,
    nativeEvent,
    nativeEventTarget,
    eventSystemFlags,
    targetContainer
  )
  console.log("dispatchQueue", dispatchQueue)
  processDispatchQueue(dispatchQueue, eventSystemFlags)
}

function processDispatchQueue(dispatchQueue, eventSystemFlags) {
  let isCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !== 0
  for (let i = 0; i < dispatchQueue.length; i++) {
    const { event, listeners } = dispatchQueue[i]
    processDispatchQueueItemsInorder(event, listeners, isCapturePhase)
  }
}

function processDispatchQueueItemsInorder(event, listeners, isCapturePhase) {
  if (isCapturePhase) {
    for (let i = listeners.length - 1; i >= 0; i--) {
      const { currentTarget, listener } = listeners[i]
      if (event.isPropagationStoped()) return
      execDispatch(event, listener, currentTarget)
    }
  } else {
    for (let i = 0; i < listeners.length; i++) {
      const { currentTarget, listener } = listeners[i]
      if (event.isPropagationStoped()) return
      execDispatch(event, listener, currentTarget)
    }
  }
}

function execDispatch(event, listener, currentTarget) {
  event.currentTarget = currentTarget
  listener(event)
  event.currentTarget = null
}

export function accumulateSinglePhaseListeners(
  targetFiber,
  reactName,
  nativeType,
  inCapturePhase
) {
  debugger
  let captureName = reactName + "Capture"
  let reactEventName = inCapturePhase ? captureName : reactName
  const listeners = []
  let instance = targetFiber
  let lastHostComponent = null
  while (instance) {
    const { stateNode, tag } = instance
    if (tag === HostComponent && stateNode !== null) {
      lastHostComponent = stateNode
      const listener = getListener(instance, reactEventName)
      if (listener) {
        listeners.push(
          createDispatchListener(instance, listener, lastHostComponent)
        )
      }
    }
    instance = instance.return
  }
  return listeners
}

function createDispatchListener(instance, listener, currentTarget) {
  return {
    instance,
    listener,
    currentTarget,
  }
}

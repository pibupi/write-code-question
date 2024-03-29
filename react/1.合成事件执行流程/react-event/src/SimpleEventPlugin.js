import {
  registerSimpleEvents,
  topLevelEventsToReactNames,
} from "./DOMEventProperties"
import { SyntheticMouseEvent } from "./SyntheicEvent"
import { IS_CAPTURE_PHASE } from "./EventSystemFlags"
import { accumulateSinglePhaseListeners } from "./DOMPluginEvnentSystem"

function extractEvents(
  dispatchQueue,
  domEventName,
  targetInst,
  nativeEvent,
  nativeEventTarget,
  eventSystemFlags,
  targetContainer
) {
  let reactName = topLevelEventsToReactNames.get(domEventName) // click=> onClick
  let SyntheticEventCtor
  let reactEventType = domEventName
  // 不同的事件，合成事件对象是不一样的,不同的事件对应不同的合成事件构造函数
  switch (domEventName) {
    case "click":
      SyntheticEventCtor = SyntheticMouseEvent
      break
    default:
      break
  }
  let inCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !== 0
  const listeners = accumulateSinglePhaseListeners(
    targetInst,
    reactName,
    nativeEvent.type,
    inCapturePhase
  )
  if (listeners.length > 0) {
    // 如果有监听，就创建一个新的合成事件对象
    const event = new SyntheticEventCtor(
      reactName,
      reactEventType,
      targetInst,
      nativeEvent,
      nativeEventTarget
    )
    dispatchQueue.push({
      event,
      listeners,
    })
  }
}

export { registerSimpleEvents as registerEvents, extractEvents }

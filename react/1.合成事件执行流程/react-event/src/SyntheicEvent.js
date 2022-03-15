function functionThatReturnTrue() {
  return true
}
function functionThatReturnFalse() {
  return false
}

function createSyntheticEvent(Interface) {
  function SyntheticBaseEvent(
    reactName,
    reactEventType,
    targetInst,
    nativeEvent,
    nativeEventTarget
  ) {
    this._reactName = reactName
    this._targetInst = targetInst
    this.type = reactEventType
    this.nativeEvent = nativeEvent
    this.target = nativeEventTarget
    this.currentTarget = null // 当前事件源
    // 选择性的吧原生事件对象上的属性，拷贝到合成事件对象上去
    for (const propName in Interface) {
      this[propName] = nativeEvent[propName]
    }
    this.isDefaultPrevented = functionThatReturnFalse
    this.isPropagationStoped = functionThatReturnFalse
    return this
  }
  Object.assign(SyntheticBaseEvent.prototype, {
    // 做一个polyfill兼容处理
    preventDefault() {
      const event = this.nativeEvent
      if (event.preventDefault) {
        event.preventDefault()
      } else {
        // IE
        event.returnValue = false
      }
      this.isDefaultPrevented = functionThatReturnTrue
    },
    stopPropagation() {
      const event = this.nativeEvent
      if (event.stopPropagation) {
        event.stopPropagation()
      } else {
        // IE
        event.cancelBubble = true
      }
      this.isPropagationStoped = functionThatReturnTrue
    },
  })
  return SyntheticBaseEvent
}

const MouseEventInterface = {
  clientX: 0,
  clientY: 0,
}

export const SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface)
export const SyntheticEvent = createSyntheticEvent({})
 
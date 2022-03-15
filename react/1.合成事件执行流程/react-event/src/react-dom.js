import { listenToAllSupportedEvents } from "./DOMPluginEvnentSystem"
import { HostComponent } from "./ReactWorkTags"
import { internalInstanceKey, internalPropsKey } from "./ReactDOMComponentTree"

function render(vdom, container) {
  listenToAllSupportedEvents(container)
  mount(vdom, container)
}
function mount(vdom, parentDOM) {
  let newDOM = createDOM(vdom, parentDOM)
  parentDOM.appendChild(newDOM)
}
function createDOM(vdom, parentDOM) {
  let { type, props } = vdom
  let dom
  if (typeof vdom === "string" || typeof vdom === "number") {
    dom = document.createTextNode(vdom)
  } else {
    dom = document.createElement(type)
  }
  let returnFiber = parentDOM[internalInstanceKey] || null
  let fiber = {
    tag: HostComponent,
    type,
    stateNode: dom,
    return: returnFiber,
  }
  dom[internalInstanceKey] = fiber // 构建fiber树
  dom[internalPropsKey] = props // 存放属性，方便查找处理方法
  if (props) {
    updateProps(dom, {}, props)
    if (Array.isArray(props.children)) {
      reconcleChildren(props.children, dom)
    } else {
      mount(props.children, dom)
    }
  }
  return dom
}
function reconcleChildren(children, parentDOM) {
  children.forEach((child) => mount(child, parentDOM))
}
function updateProps(dom, oldProps, newProps) {}

const ReactDOM = {
  render,
}
export default ReactDOM

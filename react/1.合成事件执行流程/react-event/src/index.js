import React from "./react"
import ReactDOM from "./react-dom"
import { isBatchingEventUpdates } from "./ReactDOMUpdateBatching"
let rootContainerElement = document.getElementById("root")

const handleDivClick = () => {
  console.log("父元素冒泡")
}
const handleDivClickCapture = () => {
  console.log("父元素捕获")
}
const handleButtonClick = () => {
  console.log("isBatchingEventUpdates", isBatchingEventUpdates)
  console.log("子元素冒泡")
  setTimeout(() => {
    console.log("isBatchingEventUpdates", isBatchingEventUpdates)
  })
}
const handleButtonClickCapture = () => {
  console.log("子元素捕获")
}

// let element = (
//   <div onClick={handleDivClick} onClickCapture={handleDivClickCapture}>
//     <button
//       onClick={handleButtonClick}
//       onClickCapture={handleButtonClickCapture}
//     >
//       点击
//     </button>
//   </div>
// )
let element = React.createElement("div", {
  onClick: handleDivClick,
  onClickCapture: handleDivClickCapture
}, /*#__PURE__*/React.createElement("button", {
  onClick: handleButtonClick,
  onClickCapture: handleButtonClickCapture
}, "点击"));
console.log(element)
ReactDOM.render(element, rootContainerElement)

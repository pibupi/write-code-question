import React from "./react"
import ReactDOM from "react-dom"

class APP extends React.Component {
  parentRef = React.createRef()
  childRef = React.createRef()
  /**
 * document原生事件捕获
  index.js:57 父元素React事件捕获
  index.js:63 子元素React事件捕获
  index.js:12 父元素原生事件捕获
  index.js:26 子元素原生事件捕获
  index.js:33 子元素原生事件冒泡
  index.js:19 父元素原生事件冒泡
  index.js:60 子React事件冒泡
  index.js:54 父元素React事件冒泡
  index.js:47 document原生事件冒泡
  index.js:40 document原生事件捕获
  index.js:47 document原生事件冒泡
  从结果可以看出来:
    1.捕获阶段：先注册先执行
    2.冒泡阶段：先注册后执行
  本次是React17

*/
  componentDidMount() {
    this.parentRef.current.addEventListener(
      "click",
      () => {
        console.log("父元素原生事件捕获")
      },
      true
    )
    this.parentRef.current.addEventListener(
      "click",
      () => {
        console.log("父元素原生事件冒泡")
      },
      false
    )
    this.childRef.current.addEventListener(
      "click",
      () => {
        console.log("子元素原生事件捕获")
      },
      true
    )
    this.childRef.current.addEventListener(
      "click",
      () => {
        console.log("子元素原生事件冒泡")
      },
      false
    )
    document.addEventListener(
      "click",
      () => {
        console.log("document原生事件捕获")
      },
      true
    )
    document.addEventListener(
      "click",
      () => {
        console.log("document原生事件冒泡")
      },
      false
    )
  }

  parentBuble = () => {
    console.log("父元素React事件冒泡")
  }
  parentCapture = () => {
    console.log("父元素React事件捕获")
  }
  childBuble = () => {
    console.log("子React事件冒泡")
  }
  childCapture = () => {
    console.log("子元素React事件捕获")
  }

  render() {
    return (
      <div
        ref={this.parentRef}
        onClick={this.parentBuble}
        onClickCapture={this.parentCapture}
      >
        <p
          ref={this.childRef}
          onClick={this.childBuble}
          onClickCapture={this.childCapture}
        >
          222
        </p>
      </div>
    )
  }
}

ReactDOM.render(<APP />, document.querySelector("#root"))

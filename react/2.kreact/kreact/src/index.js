import ReactDOM from "./react-dom-fiber"
import Component from "./Component"

class ClassComponent extends Component {
  render() {
    return (
      <div className="border">
        <p>{this.props.name}</p>
      </div>
    )
  }
}

function FunctionComponent(props) {
  return (
    <div className="border">
      <p>{props.name}</p>
    </div>
  )
}

// ! Fragment 与 <> 的区别在于 Fragment可以加key值
function FragmentComponent(props) {
  return (
    <>
      <li>1</li>
      <li>2</li>
    </>
  )
}

let element = (
  <section className="border">
    <h1>满</h1>
    <h1>全站</h1>
    <a href="https://www.baidu.com">百度</a>
    <FunctionComponent name="函数组件" />
    <ClassComponent name="类组件" />
    <>
      <h1>1</h1>
      <h2>2</h2>
    </>
    <ul>
      <FragmentComponent />
    </ul>
  </section>
)

// ! ReactDOM.render 与 累组件中的render没有关系
ReactDOM.render(element, document.getElementById("root"))

// ! 不同节点的渲染
// 原生标签节点：div、h1  document.createElement
// 文本节点  document.createTextNode / node.textContext / node.nodeValue
// 函数组件  执行函数的结果
// 类组件    先实例化，在执行render函数
// Fragment 直接遍历子节点

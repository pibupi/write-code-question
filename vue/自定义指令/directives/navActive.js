export default {
  bind: function (el, binding) {
    const options = binding.value
    const { className, activeClass, currentIndex } = options
    const children = el.getElementsByClassName(className)
    children[currentIndex].className += `${activeClass}`
  },
  update: function () {
    const options = binding.value
    const oldOptions = binding.oldValue
    const { className, activeClass, currentIndex } = options
    const children = el.getElementsByClassName(className)
    const { currentIndex: oldCurrentIndex } = oldOptions
    children[currentIndex].className += `${activeClass}`
    children[oldCurrentIndex].className = className
  },
}
// 自定义指令：通过原生js操作dom
// bing(指令挂在到dom上就执行)、update、inserted（插入到dom上）等钩子函数
// value / oldValue
// 封装一些功能，高度的复用
export default (Vue) => {
  return class LazyClass {
    constructor(options) {}
    add(el) {
      Vue.nextTick(() => {
        console.log(el.parentNode)
      })
    }
  }
}

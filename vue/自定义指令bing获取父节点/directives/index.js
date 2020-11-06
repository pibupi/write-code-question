import Lazy from './lazy'
export default {
  install(Vue, options) {
    const LazyClass = Lazy(Vue)
    const lazy = new LazyClass(options)
    Vue.directive('lazy', {
      bind: lazy.add.bind(lazy),
    })
  },
}

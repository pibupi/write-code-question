import Vue from 'vue'
import App from './App'
import toastRegistry from './component/toast.js'
Vue.use(toastRegistry)
new Vue({
  render:h=>h(App)
}).$mount('#app')
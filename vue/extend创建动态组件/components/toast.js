import Vue from 'vue'
import Toast from './toast.vue'
const ToastConstructor = Vue.extend(Toast)
function showToast(text,duration=2000){
  const toastDOM = new ToastConstructor({
    el:document.createElement('div'),
    data(){
      return {
        text:text,
        show:true
      }
    }
  })
  document.body.appendChild(toastDOM.$el)
  console.log(toastDOM)
  setTimeout(() => {
    toastDOM.show = false
  }, duration);
}
function toastRegistry() {
  Vue.prototype.$toast = showToast
}
export default toastRegistry
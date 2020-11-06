import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vues)
const store = new Vuex.Store({
  state: {
    buttonPermission: {
      add: true,
      edit: false,
      del: false,
    },
  },
})
export default store

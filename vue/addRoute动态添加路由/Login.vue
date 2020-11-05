<template>
  <div>
    <h1>登录页面</h1>
  <button @click="onLogin">登录</button>
  </div>
</template>
<script>
import {asycRoute} from './router'
export default {
  methods:{
    onLogin(){
      this.$store.commit('login')
      this.$router.addRoutes(ayncRoute)
    }
  }
}
</script>
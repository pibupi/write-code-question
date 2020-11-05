<template>
  <div id="app">
    <h1>router中动态理由参数变化问题</h1>
    <router-link to="/">首页</router-link>
    <router-link to="/user/1">用户1</router-link>
    <router-link to="/user/2">用户2/router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  // 这个问题是由于组件是复用的，所以在参数变化的时候 组件不会重新渲染，导致获取不到最新的路由参数
  // 解决方案用 watch 或 路由守卫
}
</script>
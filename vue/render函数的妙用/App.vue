<template>
  <div id="app">
    <h1>render函数的妙用</h1>
    <Home :level="1">你好</Home>
    <Home :level="2">哈哈</Home>
    <Home :level="3">呵呵</Home>
  </div>
</template>
<script>
import Home from './home'
export default {
  components: {
    Home,
  },
}
</script>

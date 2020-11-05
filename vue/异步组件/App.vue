<template>
  <div>
    <h1>异步组件</h1>
    <button @click="handleClick">加载异步组件</button>
    <div v-if="show">
      <List />
    </div>
  </div>
</template>
<script>
import loadingComp from './loadingComp'
import errComp from './errComp'
// 异步组件工厂函数
const AsyncList = () => ({
  component: import(/*webpackChunkName:'list'*/ './List'),
  loading: loadingComp,
  error: errComp,
  delay: 200, // 超过200ms显示loadingComp
  timeout: 3000, // 超过3000显示errComp
})
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    handleClick() {
      this.show = !this.show
    },
  },
  components: {
    AsyncList,
  },
}
</script>

<template>
  <div id="app">
    <h1>bind获取dom节点的问题</h1>
    <ul>
      <li><img src="" alt="" v-lazy /></li>
      <li><img src="" alt="" v-lazy /></li>
      <li><img src="" alt="" v-lazy /></li>
    </ul>
    <!--正常情况下是可以获取到节点的。
    
     这里面有个需求：
      图片懒加载，需要获取父节点的滚动属性，这时候使用bind就会获取到null，因为bind的时候
      使用该指令的dom元素还没完全挂插入到父节点中去，
      解决方案有两种：
        1. 使用inserted ：保证dom插入完毕之后再去获取
        2.  继续使用bind，但是要结合Vue.nextTick来实现
      -->
  </div>
</template>
<script>
// import test from './directives/test'
import lazy from './directives/lazy'
export default {
  directives: {
    // test,
    lazy,
  },
}
</script>

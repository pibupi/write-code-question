<template>
  <div id="app">
    <h1>按钮权限</h1>
    <button v-has="edit">编辑</button>
    <button v-has="add">添加</button>
    <button v-has="del">删除</button>
  </div>
</template>
<script>
import has from './directives/has'
export default {
  directives: {
    has,
  },
}
</script>

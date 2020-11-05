<template>
  <div id="app">
    <h1>表单输入绑定</h1>
    <input type="radio" id="james" value="James" v-model="picked">
    <label for="james">James</label>
    <input type="radio" id="Tony" value="Tony" v-model="picked">
    <label for="Tony">Tony</label>
    <input type="radio" id="jimmy" value="jimmy" v-model="picked">
    <label for="jimmy">jimmy</label>
    <br>
    <span>选中的名字：{{picked}}</span>
  </div>
  <!--v-model要绑定同一个值 -->
</template>
<script>
export default {
  data() {
    return {
      picked: '',
    }
  },
}
</script>

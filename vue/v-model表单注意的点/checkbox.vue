<template>
  <div id="app">
    <h1>表单输入绑定</h1>
    <input type="checkbox" id="james" value="James" v-model="checkedNames">
    <label for="james">James</label>
    <input type="checkbox" id="Tony" value="Tony" v-model="checkedNames">
    <label for="Tony">Tony</label>
    <input type="checkbox" id="jimmy" value="jimmy" v-model="checkedNames">
    <label for="jimmy">jimmy</label>
    <br>
    <span>选中的名字：{{checkedNames}}</span>
  </div>
  <!--v-model要绑定同一个值 -->
</template>
<script>
export default {
  data() {
    return {
      checkedNames: [],
    }
  },
}
</script>

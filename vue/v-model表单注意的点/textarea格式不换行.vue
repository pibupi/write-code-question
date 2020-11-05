<template>
  <div id="app">
    <h1>表单输入绑定</h1>
    <textarea v-model="message"></textarea>
    <p style="white-space: pre-line">{{ message }}</p>
  </div>
  <!-- 这里如果在textarea中写换行的文本，那么即使有\n的换行符，那么p标签内也不会换行的，
  需要加上个样式white-space:pre-line  -->
</template>
<script>
export default {
  data() {
    return {
      message: 'hello',
    }
  },
}
</script>

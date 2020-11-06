<template>
  <div id="app">
    <h1>非Prop的Attribute? inheritAttrs?</h1>
    <h1>如何使用来提高封装组件的可扩展性</h1>
    <my-input
      :value="message"
      type="text"
      placeholder="请输入用户名"
    ></my-input>
    <my-input
      v-model="message"
      type="password"
      placeholder="请输入密码"
    ></my-input>
    <!-- 注意：组件上的v-model 就等于 :value ,所以在子组件中可以使用value来接收props -->
  </div>
</template>
<script>
import myInput from './components/MyInput'
export default {
  components: {
    myInput,
  },
  data() {
    return {
      message: 'hello',
    }
  },
}
</script>

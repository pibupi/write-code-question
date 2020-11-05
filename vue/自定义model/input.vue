<template>
  <div>
    <input type="text" :value="value" @input="handleInput">点赞
  </div>
</template>
<script>
export default {
  props:['value'],
  methods:{
    handleInput(e){
      this.$emit('input',e.target.value)
    }
  }
}
</script>
<style scoped>

</style>
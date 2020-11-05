<template>
  <div>
    <input type="checkbox" :checked="checked" @change="handleChange">点赞
  </div>
</template>
<script>
export default {
  model:{
    prop:'checked',
    event:'change'
  },
  props:['checked'],
  methods:{
    handleChange(e){
      this.$emit('change',e.target.checked)
    }
  }
}
</script>
<style scoped>

</style>
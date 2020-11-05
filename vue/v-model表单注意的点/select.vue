<template>
  <div id="app">
    <select v-model="selected" multiple>
      <!-- 这个默认选项要加上disabled，如果不加上在ios会选择不到某一个这样的问题 -->
      <option disabled value="">请选择</option> 
      <option>zh</option>
      <option>ww</option>
      <option>zl</option>
    </select>
    <span>名字：{{selected}}</span>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:''
    }
  }
}
</script>
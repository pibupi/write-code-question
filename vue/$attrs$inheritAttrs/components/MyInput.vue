<template>
  <div class="input-container">
    <input v-bind="$attrs" :value="value" @input="$emit('input')" />
    <span>用户名需要3-5位</span>
    <!-- 这里注意一下：外层的div用来包裹，里面肯能有多层元素，那么
      我们在父组件中直接传递的话会把属性放到div上去，并不会放到input上
      这时我们可以使用inheritAttrs:false来阻止默认传递属性的方式
      然后再想要绑定属性的标签上使用v-bind="$attrs"  
      $attrs就代表了父级所传递过来的所有属性
     -->
  </div>
</template>
<script>
export default {
  props: ['value'], // 用Props接收的就不会存放在$attrs里了，要注意，
  inheritAttrs: false,
}
</script>

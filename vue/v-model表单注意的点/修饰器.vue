<template>
  <div id="app">
    <h1>v-model修饰器</h1>
    <input type="text" v-model.lazy="lazy" />
    <span>{{ lazy }}</span>
    <!-- lazy 会把input事件变为change -->
    <input type="text" v-model.number="lazy" />
    <span>{{ typeof number }}</span>
    <!-- number 会把值变为Number类型，如果不加这个修饰符即使写type='number'，那么值也是string的 ，要注意 -->
    <input type="text" v-model.trim="trim" />
    <span>{{ trim }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lazy: 'lazy',
      number: 1,
      trim: 'trim',
    }
  },
}
</script>

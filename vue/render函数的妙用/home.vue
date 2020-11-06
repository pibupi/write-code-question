<template>
  <!-- 错误的例子,重复的代码 -->
  <div>
    <h1 v-if="level === 1">
      <a href="#">
        <slot></slot>
      </a>
    </h1>
    <h2 v-if="level === 2">
      <a href="#">
        <slot></slot>
      </a>
    </h2>
    <h3 v-if="level === 3">
      <a href="#">
        <slot></slot>
      </a>
    </h3>
  </div>
</template>
<script>
export default {
  props: ['level'],
}
</script>

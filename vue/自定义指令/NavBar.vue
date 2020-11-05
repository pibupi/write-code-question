<template>
  <div
    class="nav-bar"
    v-NavActive="{
      className: 'nav-item',
      activeClass: 'nav-active',
      currentIndex,
    }"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      @click="handleIndex(index)"
      class="nav-item"
    >
      {{ item }}
    </div>
  </div>
</template>
<script>
import NavActive from './directives/navActive'
export default {
  directives: {
    NavActive,
  },
  data() {
    return {
      items: ['1', '2', '3'],
      currentIndex: 0,
    }
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index
    },
  },
}
</script>
<style scoped>
.nav-item {
  font-size: 16px;
}
.active {
  background: #000;
  color: #fff;
}
</style>

<template>
  <div class="navbar">
    <div
      v-for="(item, index) in items"
      :key="index"
      @click="changeIndex(index)"
      :class="['nav-item', { active: index === currentIndex }]"
    >
      <!-- :class="['nav-item', index=== currentIndex ? 'active' : ']" -->
      <!-- :class="{'active':index===currentIndex}" -->
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
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

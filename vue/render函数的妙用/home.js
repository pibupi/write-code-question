export default {
  // render函数本质上就是一个函数
  props: {
    level: Number,
  },
  render(h) {
    console.log(h)
    // h 就是createElement
    const tag = 'h' + this.level
    return <tag>{this.$slots.default}</tag>
  },
}

<script>
export default {
  beforeCreate() {
    console.log('Child beforeCreate')
  },
  create() {
    console.log('Child create')
  },
  beforeMounted() {
    console.log('Child beforeMounted')
  },
  render(h) {
    console.log('Child render')
    return (
      <div>
        <h1>Vue中父子组件挂在顺序及 子组件监听父组件完成时机</h1>
        <h1>Child</h1>
      </div>
    )
  },
  mounted() {
    console.log('Child mounted')
    this.$bus.$on('parentMounted',()=>{
      console.log('parent Mounted')
    })
  },
}
</script>

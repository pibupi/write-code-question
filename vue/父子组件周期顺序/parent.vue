<script>
import Child from './child'
export default {
  components: {
    Child,
  },
  beforeCreate() {
    console.log('parent beforeCreate')
  },
  create() {
    console.log('parent create')
  },
  beforeMounted() {
    console.log('parent beforeMounted')
  },
  render(h) {
    console.log('parent render')
    return (
      <div>
        <h1>Vue中父子组件挂在顺序及 子组件监听父组件完成时机</h1>
        <h1>Parent</h1>
        <Child />
      </div>
    )
  },
  mounted() {
    console.log('parent mounted')
    this.$bus.$emit('parentMounted')
  },
}
// 通过eventbus来实现子组件监听父组件挂在时机
</script>
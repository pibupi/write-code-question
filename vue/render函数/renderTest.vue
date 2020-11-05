<script>
import Test from './Test'
export default {
  render(createElement) {
    return createElement(
      Test,
      {props:{
        msg:'zh'
      }},
    )
  },
}
</script>

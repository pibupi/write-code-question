<script>
export default {
  props: {
    tag: String,
  },
  data() {
    return {
      people: ['aa', 'bb', 'cc'],
    }
  },
  render(createElement) {
    return createElement(
      this.tag,
      {},
      this.people.map((name) =>
        createElement(
          'li',
          {
            attrs: { class: 'test' },
            on: {
              click: () => {
                console.log('li click')
              },
            },
          },
          `${name}`
        )
      )
    )
  },
}
</script>

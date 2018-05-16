<script>
export default {
  render(createElement) {
    return createElement('span', {
      attrs: {
        class: 'text-2xl text-blue font-bold'
      }
    }, [
      this.$slots.default
    ])
  }
}
</script>



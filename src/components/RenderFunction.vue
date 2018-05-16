<script>
export default {
  props: ['tag'],

  data () {
      return {}
  },

  render (createElement) {
      return createElement (this.tag, {
          attrs: {
              class: 'btn btn-blue'
          },
          on: {
              click: () => alert('clicked')
          }
      }, 'Hello world!')
  }
}
</script>
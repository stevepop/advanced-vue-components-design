<script>
export default {
  props:['url'],

  created () {
      fetch (this.url)
        .then (response => response.json())
        .then(json => {
            this.json = json
            this.loading = false
        })
  },
  data () {
    return {
        json: null,
        loading: true
    }
  },
  render() {
      return this.$scopedSlots.default({
          json: this.json,
          loading: this.loading
      })
  }
}
</script>


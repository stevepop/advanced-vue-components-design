<script>
export default {
  render(createElement) {
   return this.$scopedSlots.default({
      subject: 'Scoped Slot'
    })
  }
}
</script>



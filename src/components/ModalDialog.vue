<template>
<portal to="modals" v-if="show">
   <div class="modal-backdrop">
        <div class="modal">
            <slot></slot>
        </div>
   </div>
</portal>
</template>

<script>
export default {
   props: ['show'],

   watch: {
    show: {
      immediate: true,
      handler: function(show) {
        if (show) {
          this.preventBackgroundScrolling &&
            document.body.style.setProperty("overflow", "hidden")
        } else {
          this.preventBackgroundScrolling &&
            document.body.style.removeProperty("overflow")
        }
      }
    }
  },

  methods: {
       cancel() {
      this.$emit("close")
    },
  },

  created () {
       const listener = document.addEventListener("keydown", e => {
      if (this.show && e.keyCode === 27) {
        this.cancel()
      }
    })

    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", listener)
    })
  }
}
</script>


<template>
    <div class="w-1/4">
        <input :value="value" class="form-input" type="text" ref="input" id="datepicker">
    </div>
</template>

<script>
import Pickaday from 'pikaday'

export default {
  props: {
      value: {required: true},
      format: {default: 'YYYY-MM-DD'},
      options: { default: {}}
  },

  mounted () {
    const picker = new Pickaday ({
        field: this.$refs.input,
        format: 'MM/DD/YYYY',
        onSelect: () => {
            this.$emit('input', picker.toString())
        },
        ...this.options
    })
  }
}
</script>


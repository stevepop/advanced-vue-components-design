<template>
    <div class="bg-grey-dark p-6">
        <h2 class="my-6">Wrapping External Libraries as Vue Components (Datepicker)</h2>
         <date-picker v-model="date" format="DD/MM/YYYY" :options="{firstDay: 7}"></date-picker>
    </div>
</template>

<script>
import DatePicker from "@/components/DatePicker.vue"
export default {
    data () {
        return {
            date: '14/05/2018'
        }
    },
  components: {
      DatePicker
  }
}
</script>


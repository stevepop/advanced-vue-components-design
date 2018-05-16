<template>
  <div class="card w-1/2">
    <h1 class="text-2xl text-black font-bold mb-6">Your Contacts</h1>
    <div>
      <div v-for="contact in contacts" :key="contact.id" class="flex items-center spaced-y-6">
        <img :src="contact.picture.medium" class="h-12 w-12 rounded-full block mr-2" alt="">
        <div>
          <div class="font-bold text-black">
            {{ pseudoSlot({contact: contact})}}
          </div>
           <div class="font-bold text-black">
              <slot :contact="contact"></slot>
          </div>

          <div class="text-grey-dark">
            {{ contact.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './contacts.json'

export default {
  props: ['pseudoSlot'],
  data() {
    return {
      contacts: []
    }
  },
  created() {
    this.contacts = data
  }
}
</script>

<style>
  .spaced-y-6 {
    margin-bottom: 1.5rem;
  }
  .spaced-y-6:last-child {
    margin-bottom: 0;
  }
</style>


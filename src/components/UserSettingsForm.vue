<template>
  <div class="card">
    <h1 class="text-2xl font-bold mb-6 text-black">Your Settings</h1>
    <label class="block mb-6">
      <span class="block text-grey-darker font-semibold mb-2">Email Address</span>
      <input v-model="email" class="form-input" placeholder="you@example.com">
    </label>
    <div class="mb-8">
      <span class="block text-grey-darker font-semibold mb-2">Newsletter</span>
      <div class="flex justify-between items-center">
        <p class="mr-4 text-black">Send you occasional news and updates.</p>
        <toggle-input v-model="receiveNewsletter"></toggle-input>
      </div>
    </div>
    <div class="flex justify-between">
      <delete-account-button 
        class="btn btn-red btn-with-icon p-2"
        account-id="accountId"
      >
        <svg class="h-4 w-4 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>
        Cancel Account
      </delete-account-button>
      <button type="button" class="btn btn-blue">Update Settings</button>
    </div>
  </div>
</template>

<script>
import DeleteAccountButton from "./DeleteAccountButton.vue"
import ToggleInput from "./ToggleInput.vue"

export default {
  components: {
    DeleteAccountButton,
    ToggleInput
  },
  props: ["accountId"],
  data() {
    return {
      email: "jane@example.com",
      receiveNewsletter: false
    }
  },
  methods: {
    toggleNewsletter() {
      this.receiveNewsletter = !this.receiveNewsletter
    }
  }
}
</script>

<style>
  svg {
    width: 10px;
    height: 10px;
  }
</style>


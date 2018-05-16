<template>
  <div class="min-h-screen bg-grey-darker p-8 text-white">
    <h1 class="text-center text-white">Advanced Vue Components Design</h1>
    <div class="flex">
      <div class="w-1/4">
        <div class="sidebar p-6 bg-white">
           <h2 class="my-6 text-grey-dark">Contents</h2>
           <router-link to="/" class="block no-underline text-grey py-2">Home</router-link>           
           <router-link :to="{ name: 'external-lib'}" class="block no-underline text-grey py-2">Wrapping External Libraries</router-link>
           <router-link :to="{ name: 'modal-page'}" class="block no-underline text-grey py-2">Closing on Escape/background scrolling</router-link>
           <router-link :to="{ name: 'button-slots'}" class="block no-underline text-grey py-2">Modals / Component Composition / Slots</router-link>
        </div>
      </div>
      <div class="w-3/4">
        <div class="demo-content ml-6 p-6 bg-white">
          <h3 class="text-black">Sandbox for Advanced Vue Components Design Course</h3>
           <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>
<style>
  @import url('./assets/styles/main.css');
  @import url('./assets/styles/pickaday.css');

</style>



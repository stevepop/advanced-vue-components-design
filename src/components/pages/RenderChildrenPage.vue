<template>
  <div class="min-h-screen text-center">
      <h3 class="text-black mb-6">Render Functions and Children</h3>
      <div class="contacts w-1/4 text-black">
           <render-children></render-children>
      </div>
  </div>
</template>

<script>
import RenderChildren from '@/components/RenderChildren'
export default {
     components: {
        RenderChildren
    }
}
</script>


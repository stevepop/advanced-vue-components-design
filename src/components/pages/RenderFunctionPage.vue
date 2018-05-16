<template>
  <div class="min-h-screen text-center">
      <h3 class="text-black mb-6">Render Function</h3>
      <div class="flex justify-center">
           <render-function tag="button"></render-function>
      </div>
  </div>
</template>

<script>
import RenderFunction from '@/components/RenderFunction'
export default {
     components: {
        RenderFunction
    }
}
</script>


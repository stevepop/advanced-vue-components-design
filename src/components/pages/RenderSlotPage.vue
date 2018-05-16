<template>
  <div class="min-h-screen text-center">
      <h2 class="text-black mb-6">Render Functions and Slots</h2>
      <div class="text-center p-6 my-4">
           <render-slot>
               Hello Slot!
           </render-slot>
      </div>
      <div class="text-center text-blue p-6 my-4">
           <render-scoped-slot>
               <h1 slot-scope="{ subject }">
                  Hello {{ subject }}!
               </h1>
           </render-scoped-slot>
      </div>
  </div>
</template>

<script>
import RenderSlot from '@/components/RenderSlot'
import RenderScopedSlot from '@/components/RenderScopedSlot'
export default {
     components: {
        RenderSlot,
        RenderScopedSlot
    }
}
</script>


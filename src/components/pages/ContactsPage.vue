<template>
     <div class="bg-grey-dark p-6">
        <h2 class="my-6">Passing Data Up Using Scoped Slots</h2>
         <contacts-list :pseudo-slot="({contact}) => contact.name.first">
             <a slot-scope="{ contact }" :href="`/contacts/${contact.id}`">
                 {{ contact.name.first }}
             </a>
         </contacts-list>
    </div>
</template>

<script>
import ContactsList from '@/components/ContactsList'

export default {
  components: {
      ContactsList
  }
}
</script>


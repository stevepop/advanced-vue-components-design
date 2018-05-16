<template>
   <div>
       <h3>Native-Style Buttons Using Slots and Class Merging</h3>
          <announcement-modal
              :show="showAnnouncement"
              @close="showAnnouncement = false"
          ></announcement-modal>

        <div class="min-h-screen bg-grey-darker p-8">
        <div class="max-w-sm mx-auto">
            <user-settings-form
            :account-id="accountId"
            ></user-settings-form>
        </div>
        </div>
        <portal-target name="modals"></portal-target>
  </div>
</template>

<script>
import UserSettingsForm from '@/components/UserSettingsForm.vue'
import AnnouncementModal from '@/components/AnnouncementModal.vue'

export default {
    components: {
      UserSettingsForm,
      AnnouncementModal,
    },
   data() {
    return {
      accountId: 7,
      showAnnouncement: true,
    }
  }
}
</script>


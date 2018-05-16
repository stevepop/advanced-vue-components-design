<template>
  <modal-dialog :show="show" @close="dismiss">
    <h1 class="text-center text-2xl font-bold mb-4">
      Exciting new features are here!
    </h1>
    <p class="text-center text-blue mb-6">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut eligendi quod tempore totam explicabo sit consectetur architecto? Tempora, repellat est rem ut esse ab officia saepe ratione tempore. Obcaecati.
    </p>
    <div class="text-center">
      <button @click="dismiss" type="button" class="btn btn-blue">
        Dismiss
      </button>
    </div>
  </modal-dialog>
</template>

<script>
import ModalDialog from './ModalDialog'

export default {
  components: {
    ModalDialog
  },
  props: {
    show: { required: true },
    preventBackgroundScrolling: { default: true }
  },
  
  created () {
      const escapeHandler = (e) => {
            if (e.key === 'Escape' && this.show) {
                 this.dismiss()
            }
        }

        document.addEventListener("keydown", escapeHandler)

        this.$once('hook:destroyed', () => {
            document.removeEventListener('keydown', escapeHandler)
        })
  },
 
  methods: {
    dismiss() {
      this.$emit("close")
    }
  }
}
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  margin-left: auto;
  margin-right: auto;
  max-width: 30rem;
  margin-top: 2rem;
}

.card,
.modal {
  background-color: #fff;
  border-radius: 0.25rem;
  padding: 2rem;
  -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
}
</style>


import Vue from 'vue'
import VueRouter from 'vue-router'

import UserSettingsForm from "@/components/UserSettingsForm.vue"
import ExternalLib from "@/components/pages/ExternalLib.vue"
import ModalPage from "@/components/pages/ModalPage.vue"
import NativeButtonPage from "@/components/pages/NativeButtonPage.vue"
import ContactsPage from "@/components/pages/ContactsPage.vue"
import RenderFunctionPage from "@/components/pages/RenderFunctionPage.vue"


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
      {
        path: '/controlled',
        name: 'controlled',
        component: UserSettingsForm
      },
      {
        path: '/external-lib',
        name: 'external-lib',
        component: ExternalLib
      },
      {
        path: '/modal-page',
        name: 'modal-page',
        component: ModalPage
      },
      {
        path: '/button-slots',
        name: 'button-slots',
        component: NativeButtonPage
      },
      {
        path: '/contacts-page',
        name: 'contacts-page',
        component: ContactsPage
      },
      {
        path: '/render-functions',
        name: 'render-functions',
        component: RenderFunctionPage
      }
    ]
  })
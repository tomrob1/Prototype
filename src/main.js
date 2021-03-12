import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePapaParse from 'vue-papa-parse'
import Chart from 'vue2-frappe'

import VeeValidate from 'vee-validate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

// Add bootstrap stuff
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VuePapaParse)
Vue.use(Chart)
Vue.use(VeeValidate)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

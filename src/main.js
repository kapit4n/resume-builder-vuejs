// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import CustomNav from '@/components/CustomNav.vue';

import { Modal, Card, Nav, Navbar } from 'bootstrap-vue/es/components'

Vue.config.productionTip = false

Vue.component('custom-nav', CustomNav)
Vue.use(Nav)
Vue.use(Navbar)
Vue.use(Modal)
Vue.use(Card)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

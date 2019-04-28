import './assets/css/app.scss'
import '@babel/polyfill'
import 'lodash'
import Vue from 'vue'
import Meta from 'vue-meta';

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

Vue.use(Meta);

window.DEV = process.env.NODE_ENV === 'development'
window.PROD = process.env.NODE_ENV === 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

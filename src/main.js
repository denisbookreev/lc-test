import '@babel/polyfill'
import Vue from 'vue'
import Meta from 'vue-meta';

import App from '@/App.vue'

Vue.use(Meta);

window.DEV = process.env.NODE_ENV === 'development'
window.PROD = process.env.NODE_ENV === 'production'

new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routes'
import LocalStore from "./localstorage";
import store from './store'

import '@fortawesome/fontawesome-free/js/all'

LocalStore.recover(store)

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

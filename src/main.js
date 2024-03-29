import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n.js'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')

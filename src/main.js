import Vue from 'vue'
import App from './vue/App.vue'
import vuelidate from 'vuelidate'
import scrollTo from 'vue-scrollto'
import VueRouter from 'vue-router'
import { buildStore } from './vuex'
import router from './vue-router'

Vue.config.productionTip = false
Vue.use(vuelidate)
Vue.use(VueRouter)
Vue.use(scrollTo)

const store = buildStore()

new Vue({
  router,
  store,
  vuelidate,
  render: h => h(App),
}).$mount('#app')

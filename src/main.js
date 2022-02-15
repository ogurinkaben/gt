import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Import Global CSS file
import './assets/main.css'
// Import jQuery for Bootstrap
import JQuery from 'jquery'
// Initialise jQuery
window.$ = JQuery
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
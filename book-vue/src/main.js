import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import router from './router/router'
import store from './store'



new Vue({
  el: '#app',
  render: h => h(App),
    router,
    store
})

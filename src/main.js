import Vue from 'vue'
import App from './App.vue'
// console.log(FexUI)
// Vue.use(FexUI)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')

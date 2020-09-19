import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Highlight from './common/js/highlight.js'
import './common/style/index.styl'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Highlight)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

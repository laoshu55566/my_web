import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {toolBox} from './assets/js/tool.js'


import './assets/css/index.less'

Vue.config.productionTip = false;
Vue.prototype.toolBox = toolBox

new Vue({
  router,
  store,
  mounted(){},
  render: h => h(App)
}).$mount('#app')

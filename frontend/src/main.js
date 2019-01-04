// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(BootstrapVue)
/* eslint-disable no-new */
var styles = [
  'background: linear-gradient(#D33106, #571402)'
  , 'border: 1px solid #3E0E02'
  , 'color: white'
  , 'display: block'
  , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
  , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
  , 'line-height: 40px'
  , 'text-align: center'
  , 'font-weight: bold'
  , 'width : 100%'
].join(';');

console.log('%c[akswosn@gmail.com] forlks project vuejs + express + mongodb '  , styles);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import store from '@/store';
import Component  from 'vue-class-component';
Vue.config.productionTip = false;
Component.registerHooks([
  'beforeRouterEnter',
  'beforeRouterLeave',
  'beforeRouterUpdate',
]);



new Vue({
  router,
  store,
  render: h => h('router-view'),
}).$mount('#app')

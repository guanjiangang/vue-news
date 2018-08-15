import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import store from './store/index.js'


Vue.use(VueRouter);

const router=new VueRouter({
	  mode:'history',
		routes:routerConfig
});

new Vue({  
  el: '#app',
  router,
  store,
  render: h => h(App)
})

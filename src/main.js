import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import store from './store/index.js'
import axios from 'axios'
import Loading from './components/loading/index.js'


Vue.use(VueRouter);
Vue.use(Loading);

//关于axios配置

//关于路由的配置
const router=new VueRouter({
	  mode:'history',
	  scrollBehavior:()=>({y:0}),
		routes:routerConfig
});

new Vue({  
  el: '#app',
  router,
  store,
  render: h => h(App)
})

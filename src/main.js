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
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {

  return Promise.reject(error);
});

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);  //配置请求跟路径
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/    //设置post头部信息
//axios.defaults.baseURL='http://localhost:8082/';
Vue.prototype.$http = axios  //其他页面在使用axios的时候直接  this.$http就可以了

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

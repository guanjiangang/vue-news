<template>
  <div id="app">  	
    <NavView v-show='headerShow'></NavView>
    <loading v-show='loading'></loading>
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script>
	import NavView from './components/Nav.vue'
	import FooterView from './components/Footer.vue'
	
	import {mapGetters,matpActions} from 'vuex'
	
	export default {
		computed:mapGetters([
			'headerShow',
			'loading'
		]),
		watch:{
			$route(to,from){
				console.log(to.path);
				if(to.path=='/user-info'){
					this.$store.dispatch('hideHeader')
				}else{
					this.$store.dispatch('showHeader')
				}
			}
		},
	  components:{
	  	NavView,
	  	FooterView
	  }
	}
</script>
	
<style>
	@import url("./assets/css/index.css");	
</style>

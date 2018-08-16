<template>
	<div id="home">		
			<BannerView></BannerView>			
		<div id="content">
			<h3>内容</h3>
		</div>
	</div>	
</template>

<script>
	import BannerView from './Banner.vue'
	export default {
	  components:{
	  	BannerView
	  }
	}
</script>

<style scoped>
	#content{width: 100%;height: 580px;background: red;text-align: center;line-height: 480px;}
</style>
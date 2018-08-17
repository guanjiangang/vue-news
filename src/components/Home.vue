<template>
	<div id="home">		
			<BannerView></BannerView>			
		<div id="content">
			<ul>
				<li v-for="(item,index) in arrList">
					<!--<a href="#">
						<h2>{{index}}</h2>
						<h2>{{item.title}}</h2>
						<p>{{item.detail}}</p>
					</a>-->
					<router-link :to="'/article/'+item.id">
						<h2>{{item.title}}</h2>
						<p>{{item.detail}}</p>
					</router-link>
				</li>
			</ul>
			
		</div>
	</div>	
</template>

<script>
	import BannerView from './Banner.vue'
	export default {
	  data(){
		return{
			arrList:[]
		}
	  },
	  components:{
	  	BannerView
	  },
	  mounted(){
	  	//获取数据
	  	this.fetchData();
	  },
	  methods:{
	  	fetchData(){
	  		var _this=this;
	  		this.$http.get('src/data/index.data').then(function(res){
	  			_this.arrList=res.data;
	  		}).catch(function(err){
	  			console.log('Home',err);
	  		});
	  	}
	  }
	}
</script>

<style scoped>
	@import '../assets/css/index.css';
	#content ul li{background: red;margin: 0 0 10px 0;padding: 10px;}
</style>
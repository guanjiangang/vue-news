<template>
	<div id="nav">
		<ul>
			<!--<li class="active">首页</li>
			<li>关注</li>
			<li>栏目</li>-->
			<router-link to='/home' tag='li' active-class='active'>首页</router-link>
			<router-link to='/follow' tag='li' active-class='active'>关注</router-link>
			<router-link to='/column' tag='li' active-class='active'>栏目</router-link>
		</ul>
	</div>
</template>

<script>
</script>
	
<style scoped>
	#nav{margin-bottom: 40px;}
	#nav ul{width: 100%;height: 40px;background: #9E9A95;text-align: center;line-height: 40px;position: fixed;left: 0;top: 0;}	
	#nav ul li{display: inline-block;margin-right: 20px;}
	#nav ul li:first-child{margin-left: 20px;}
	.active{color: red;font-weight: bold;}
</style>
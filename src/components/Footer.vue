<template>
	<div id="footer">
		<ul>
			<router-link tag='li' to='/home' class='my'>
				首页
			</router-link>
			<router-link tag='li' to='/Follow' class='my'>
				发布
			</router-link>
			<router-link tag='li' to='/user-info' class='my'>
				我的
			</router-link>
		</ul>
		
	</div>	
</template>
<script>
</script>

<style scoped>
	#footer{width: 100%;height: 60x;background: #7B7C7C;text-align: center;line-height: 60px;position: fixed;left: 0;bottom: 0;}
	#footer ul li{display: inline-block;margin-right: 60px;}
	#footer ul li:first-child{margin-left: 60px;}
	.my{color: red;font-weight: bold;}
</style>
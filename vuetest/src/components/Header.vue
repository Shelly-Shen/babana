<template> 
	<div class="container"> 
		<el-menu :router="true" :default-axctive="active" class="el-menu" mode="horizontal" @select="handleSelect">
			<el-menu-item index="/">主页</el-menu-item>
			<el-menu-item index="/List"><i class="fa fa-flag" aria-hidden="true"></i>探索</el-menu-item>		
			<el-menu-item index="4" class="right"><i class="fa fa-user-o" aria-hidden="true"></i>注册</el-menu-item>
			<el-menu-item index="3" class="right"><i class="fa fa-key" aria-hidden="true"></i>登陆</el-menu-item>
		</el-menu>
	</div>
</template>
<script>
	export default{
		name:'Header',
		data(){
			return{
			active:'0'
			};
		},
		methods:{
			handleSelect(key,keyPath){
				console.log(key,keyPath)
			}
		}
	}
</script>
<style lang="css" scoped>
	.container{
		padding:0 10%;
		background:#eef1f6;
	}
	.el-menu {
		background:#eef1f6;	
	}
	.right{
		float:right;
	}
	.el-menu-item:first-child{
		margin-left:0;
		font-size:25px;
		font-weight:100;
		background:#20a0ff;
		color:#fff;
	}
	.el-menu-item:first-child:hover{
		background:#20a0ff;
	}
</style>
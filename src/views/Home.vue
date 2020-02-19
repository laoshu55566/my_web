<template>
  <div class="home">
	<div class="left">
		<div class="headBox">
			
		</div>
		<ul>
			<li>{{this.$store.state}}</li>
		</ul>
	</div>
	<div class="frosted-glass">
		<div class="reveal"> 
			<span @click="goResume()">收藏</span> 
			<!-- <span @click="goResume()">简历</span> -->
		</div>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	components: {},
	methods:{
		goResume(){
			console.log(this.$store)
		}
	}
}
</script>

<style lang="less">
	.home{
		width: 100%;
		height: 100%;
		background: url("../../static/img/bj.jpg") no-repeat;
		background-size:100% 100%;
		position: relative;
		.left{
			display: none;
			position:absolute;
			width: 130px;
			top: 0;
			bottom: 0;
			left: 0;
			background-color: #000;
			z-index: 1;
			.headBox{
				width: 100%;
				height: 130px;
				background-color:red;
				border-bottom:1px solid #2f2b2b;
			}
			ul{
				width: 100%;
			}
			li{
				width: 100%;
				height: 28px;
				color: #fff;
				line-height: 28px;
				text-align: center;
				border-bottom:1px solid #2f2b2b;
			}
		}
	}
	.frosted-glass {
		z-index: -1;
		display: flex;
		// justify-content: center;
		// align-items: center;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(5px);//模糊度
		transition: 0.5s ease;
		.reveal{
			font-size: 12px;
			span{
				text-shadow: 2px 2px 3px #fff;
				cursor: pointer;
			}
		}
	}
</style>

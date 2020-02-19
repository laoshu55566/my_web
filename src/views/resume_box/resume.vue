<template>
<div class="resume">
	<div class="container">
		<div class="slide sticky" id="slide1">
			<div class="my_info">
				111
			</div>
		</div>
		<div class="slide sticky" id="slide2">
			<h1>Set to full page for best experience.</h1>
		</div>
		<div class="slide sticky" id="slide3">
			<h1>No JavaScript Required</h1>
		</div>
		<div class="slide sticky" id="slide4">
			<h1>End</h1>
		</div>
	</div>
</div>
</template>

<script>

export default {
	name: 'Home',
	components: {},
	methods:{

	}
}
</script>

<style lang="less">
.resume{

	.container {
		height: 100vh;
		font-family: Lora, serif;
		overflow-x: hidden;//sticky的父元素必须overflow
	}

	.slide {
		position: sticky;//不脱离文档流，元素到达距离相对定位的元素顶部0的位置时固定，不再向上移动
		top: 0;
		height: 100vh;
		display: flex;
		justify-content: center;//flex布局垂x轴剧中
		align-items: center;//flex布局垂y轴剧中
		// letter-spacing: 0.2em;//设置文字间距
		color: white;
		background-size: cover;//以使背景图像完全覆盖背景区域。
		background-position: center;

		h1 {
			font-size: 250%;
			text-shadow: 0 2px 2px black;
		}
	}
	.my_info{
		width: 450px;
		height: 200px;
		padding: 14px;
		background: rgba(0,0,0,0);
		color: red;
		border-radius: 15px;
		overflow:hidden; 
		backdrop-filter: blur(5px);//模糊度
		transition: .5s;
		&:hover{
			
			box-shadow: 0px 0px 10px #fff;
			color: #000;
		}
	}
	#slide1 {
		background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581496058142&di=1a49d2b2a11385fd77d3f44036ff4971&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F85541018b29c6f3e9ae457a2672a080189297c827763-IdQ4y5_fw658");
	}

	#slide2 {
		background-image: url("https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg");
	}

	#slide3 {
		background-image: url("https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg");
	}

	#slide4 {
		background-image: url("https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg");
	}
}
</style>

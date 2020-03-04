<template>
<div class="css_xg">
	<!-- <p class="shining">background-clip:指定元素背景所在的区域</p> -->
	<!-- <div class="neon">字体字体字体字体字体字体字体字体字体字体</div> -->
</div>
</template>

<script>

export default {
	name: 'Home',
	components: {},
	methods:{
		handleCallback(res){
			console.log(JSON.stringify(res))
		}
	},
	mounted(){
		var script = document.createElement('script');
		script.type = 'text/javascript';

		// 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数
		script.src = 'https://gaoyuanzz.com/tp/product/wangs/commTree&callback=handleCallback';
		document.head.appendChild(script);

		// 回调执行函数
		this.handleCallback()
	}
}
</script>

<style lang="less">

.css_xg{
	background: #000;
	padding: 0;
	margin: 0;
	height: 100%;
	width: 100%;
	.shining {
		font-size: 2em;
		font-family: Lato, sans-serif;
		letter-spacing: 4px;
		text-transform: uppercase;
		background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 100%);//过渡色
		background-size: 80%;
		background-repeat: no-repeat;
		// below two lines create text gradient effect
		color: transparent;
		background-clip: text;//指定元素背景所在的区域
		animation: shining 5s linear infinite;
	}

	@keyframes shining {
		from {
			background-position: -400%;
		}
		to {
			background-position: 400%;
		}
	}

	.neon{
		font-size: 30px;
		color: #cce7f8;
		animation: neonKf 0.1s linear infinite;
	}
	@keyframes neonKf {
		from {
			text-shadow: 0 0 6px rgba(182, 211, 207, 0.9),
			0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(15, 115, 223, 0.5),
			0 0 21px rgba(15, 115, 223, 0.9), 0 0 34px rgba(15, 115, 223, 0.8),
			0 0 54px rgba(15, 115, 223, 0.9);
		}
		to {
			text-shadow: 0 0 6px rgba(182, 211, 207, 1),
			0 0 40px rgba(182, 211, 207, 0.4), 0 0 12px rgba(15, 115, 223, 0.6),
			0 0 32px rgba(15, 115, 223, 0.8), 0 0 38px rgba(15, 115, 223, 0.9),
			0 0 70px rgba(15, 115, 223, 1);
		}
	}

}
</style>

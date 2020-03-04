<template>
  <div class="home">
		<router-link to="/css_xg">css</router-link>&nbsp;
		<router-link to="/money">金额</router-link>&nbsp;
  </div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Home',
	components: {},
	methods:{
		cssXg(){
			this.$router.push({path:'css_xg'})
		}
	}
}
</script>

<style lang="less">
	.home{
		width: 100%;
		height: 100%;
	}
</style>

<template>
	<div class="money">
		<input type="text" v-model="num">
		<button @click="numFormat">点击转换</button>
		<span>{{num}}</span>
	</div>
</template>

<script>

export default {
	name: 'Home',
	components: {},
	data(){
		return {
			num:0
		}
	},
	methods:{
		numFormat(){
			this.num = this.toolBox.numberFormat(this.num)
		}
	},
}
</script>

<style lang="less">
.money{

}
</style>

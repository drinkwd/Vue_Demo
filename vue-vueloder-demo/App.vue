<template>
	<h1 @click="change()">{{msg}}</h1>
	<mymenu></mymenu>
</template>
<script>
import Menu from './components/Menu.vue'
	export default{
		 data(){
		 	return {msg:'hello world'}
		 },
		 methods:{
		 	change(){
		 		this.msg="hello"
		 	}
		 },
		 components:{
		 	'mymenu':Menu
		 }
	}
</script>
<style>
	body{
		background:#ccc;
	}
</style>
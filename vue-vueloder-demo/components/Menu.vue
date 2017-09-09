<template>
	<ul>
		<li v-for='(index,value) in arr'>{{value}}</li>
	</ul>
</template>
<script>
export default{
	data(){
		return {arr:['apple','orange','pear']}
	}
}
</script>
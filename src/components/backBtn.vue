<template>
	<div id="backBtnWrapper">
		<i class="fa fa-arrow-left" aria-hidden="true" style='cursor:pointer;' v-on:click="backward"></i>
	</div>
</template>

<script>
export default {
	methods:{
		backward(event) {
			history.back();
			console.log("뒤로가기");
		}
	}
}
</script>

<style scoped>

#backImg{
	width:50px;
	height:50px;
}
#backImg:hover{
	transition: none;
	transform : none;
}

#backBtnWrapper{
	display: inline;
	margin:0;
	padding:0;
}

</style>
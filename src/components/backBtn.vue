<template>
	<div id="backBtnWrapper">
		<div class="backarrow">
		<i class="fa fa-arrow-left" aria-hidden="true" style='cursor:pointer;' v-on:click="backward"></i>
		</div>
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

#backBtnWrapper{
	position:absolute;
	display: inline-block;
	margin-top:20px;
	margin-left:20px;
}

</style>
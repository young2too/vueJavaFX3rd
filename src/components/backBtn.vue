<template>
	<div id="backBtnWrapper">
		<img id="backImg" src='../assets/menu_img/back.png' v-on:click="backward">
	</div>
</template>

<script>
export default {
	methods:{
		backward(event) {
    		history.back();
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
	display:inline;
	margin:0;
	padding:0;
}

</style>
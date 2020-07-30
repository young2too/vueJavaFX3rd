<template>
	<div id="KGBtnWrapper">
		<router-link to="/"><img id="KGImg" src='../assets/menu_img/logo.png' v-on:click="gohome"></router-link>
	</div>
</template>

<script>
export default {
	methods:{
		gohome(event) {
    		console.log("홈버튼");
		}
	}
}
</script>

<style scoped>

#KGImg{
	width:100px;
	height:40px;
}
#KGImg:hover{
	transition: none;
	transform : none;
}

#KGBtnWrapper{
	display: inline;
	margin:0;
	padding:0;
}

</style>
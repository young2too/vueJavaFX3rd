<template>
	<div id="KGBtnWrapper">
		<router-link to="/"><img id="KGImg" src='../assets/menu_img/kg.png' v-on:click="gohome"></router-link>
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
	width:170px;
	height:80px;
}
#KGImg:hover{
	transition: none;
	transform : none;
}

#KGBtnWrapper{
	display: inline;
	margin:10px;
	padding:0;
}

</style>
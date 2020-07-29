<template>
	<div class="resultContainer">
		<VueHeader></VueHeader>
		<backBtn></backBtn>
		{{ $route.params.name }}선택한 것
		{{ $route.params.time }}시간임
	</div>	
</template>

<script>
import VueHeader from '../components/Header.vue';
import backBtn from '../components/backBtn.vue';
export default {
	components:{
		'VueHeader':VueHeader,
		'backBtn':backBtn
  	},
}
</script>

<style scoped>

.resultContainer{
	position:absolute;
  	left:50%;
  	width: 200px;
  	margin : 0;
  	padding :0;
  	width: 50%;
  	height : 50%;
  	margin-left:-100px;
  	text-align:center;
}

</style>


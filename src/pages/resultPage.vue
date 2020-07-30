<template>
	<div class="resultContainer">
		<VueHeader></VueHeader>
		<backBtn></backBtn>
		{{ $route.params.name }}선택한 것
		{{ $route.params.time }}시간임
		<VueFooter></VueFooter>
	</div>	
</template>

<script>
import VueHeader from '../components/Header.vue';
import backBtn from '../components/backBtn.vue';
import VueFooter from '../components/footer.vue';
export default {
	components:{
		'VueHeader':VueHeader,
		'backBtn':backBtn,
		'VueFooter':VueFooter
  	},
}
</script>

<style scoped>

.resultContainer{
	position:absolute;
  	width: 200px;
  	margin : 0;
  	padding :0;
	width: 100%;
	height : 50%;
  	text-align:center;
}

</style>


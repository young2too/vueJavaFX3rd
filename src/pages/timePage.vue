<template>
	<div id="timeInput">
		<VueHeader></VueHeader>
		<div class='formWrapper'>
			<div class='selectedInfo'>
				<kakaomap2></kakaomap2>
				<!-- <sideList v-bind:sort="name"></sideList> -->
			</div>
		</div>
	</div>
</template>

<script>

import kakaomap2 from '../components/map/kakaomap2.vue';
import VueHeader from '../components/Header.vue';
import backBtn from '../components/backBtn.vue';
import VueFooter from '../components/footer.vue';
import kakaomap from '../components/map/kakaomap-container.vue';


export default {
	name:'params',
	props:{
		name:{
			type:String,
			default:''
		}
	},
  	components:{
		'VueHeader':VueHeader,
		'backBtn':backBtn,
		'kakaomap':kakaomap,
		'VueFooter':VueFooter,
		'kakaomap2':kakaomap2
  	},
  	methods:{
	  nextPage(){
		  	console.log(this.name);
		  	console.log(this.takeTime);
	  	}
	}
}
</script>

<style scoped>
#timeInput{
  position:absolute;
  margin:auto;
  margin-left:auto;
  width:100%;
  text-align:center;
}
.formWrapper{
	text-align:left;
}

.inputform{
	color:blue;
}

.selectedInfo{
	display:inline;
	font-size:24px;
}


#takeTime{
	width:100px;
}

</style>
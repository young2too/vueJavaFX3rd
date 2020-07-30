<template>
	<div id="timeInput">
		<VueHeader></VueHeader>
		<div class='formWrapper'>
			<div class='selectedInfo'>
				<kakaomap></kakaomap>
				<sideList v-bind:sort="name"></sideList>
			</div>
		</div>
		<VueFooter></VueFooter>
	</div>
</template>

<script>
import VueHeader from '../components/Header.vue';
import backBtn from '../components/backBtn.vue';
import VueFooter from '../components/footer.vue';
import kakaomap from '../components/map/kakaomap-container.vue';
import sideList from '../components/sideList.vue';

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
		'sideList':sideList,
		'VueFooter':VueFooter
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
  width:70%;
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
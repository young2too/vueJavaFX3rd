<template>
	<div id="timeInput">
		<VueHeader></VueHeader>
		<div class='formWrapper'>
			<div class='selectedInfo'>
				<!-- 앞 페이지에서 선택한 장르가 넘어오게 되어있음 -->
				<!-- 이곳을 꾸미면 될듯 -->
				{{ name }} 선택하셨습니다
				<backBtn></backBtn>
			</div>
			<div class='inputform'>
				{{ timeDescText }}<input type="number" v-model="takeTime" placeholder="왕복시간 입력"> 분<br>
				<router-link :to="{name:'result',params:{name:this.name,time:this.takeTime}}"><button @click="nextPage">입력</button></router-link>
				
			</div>
		</div>
	</div>
</template>

<script>
import VueHeader from '../components/Header.vue';
import backBtn from '../components/backBtn.vue';

export default {
	name:'params',
	props:{
		name:{
			type:String,
			default:''
		}
	},
  	data () {
		return{
			takeTime:null,
		  	timeDescText:'왕복시간 입력 ',
	 	}
 	 },
  	components:{
		'VueHeader':VueHeader,
		'backBtn':backBtn
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
  left:50%;
  width: 200px;
  margin : 0;
  padding :0;
  width: 50%;
  height : 50%;
  margin-left:-100px;
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
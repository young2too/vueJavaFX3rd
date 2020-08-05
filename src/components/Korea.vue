<template>
	<div class="Korea">
    	<p>아름다운 <br>밥이에요~
		<router-link :to="{name:'time',params:{name:'한식'}}"><span v-on:click="savesort('한식')">
		<img id="KoreanBtn" src="../assets/label/circlekor.png" ></span>
		</router-link>
		</p>
		<img id="riceImg" src="../assets/menu_Img/rice123.png">
	</div>
</template>

<script>
export default {
	methods: {
		savesort(value){
			localStorage.setItem('sort', value);
		}
	}
}
</script>

<style scoped>

.Korea{
	text-align: left;
	width:100%;
	height:100%;
	position:absolute;
	background-color: #f2c84b;
}
#KoreanBtn{
	position:absolute;
	z-index: 100;
	width: auto; height: auto;
   	max-width: 15rem;
    max-height: 15rem;
	margin-top: -13%;
	margin-left: 11%;
}

#riceImg{
		position :absolute;
		bottom: 1rem;
		right: 0; 
		width: auto; height: auto;
   		max-width: 35rem;
    	max-height: 35rem;
		
}
	p { 
	font-size: 11rem;
	color : white;
	font-family: 'BMHANNAPro';
	margin-top: 13%;
	margin-left: 10%;
	line-height: 10rem;
}

</style> 
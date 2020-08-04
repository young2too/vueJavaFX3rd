<template>
	<div class="America">
		<p id="firstWord"> Chick Chick
		<p id="secondWord">Pork Pork</p>
		<p id="thirdWord"><strong></strong>"세상에서 제일 행복한 기차"</p>
		<img id="thomas" src="../assets/menu_Img/Thomas.png">
	</div>
</template>

<script>
export default {
	data(){
	},
	methods: {
	}
}
</script>
<style scoped>
	p{
		margin: 0;
		padding: 0;
		line-height: 1.8ch;
	}
	.America{
		width: 100%;
		height: 100%;
		position: absolute;
  		background-color: #D98E04;
  	}
	#firstWord{
		margin-top: 200px;
		margin-left: 200px;
		color:white;
		background-position:left;
		font-size: 10rem;
		font-family: 'BMHANNAPro';
		
	}
	#secondWord{
		margin-left:200px;
		color:white;
		background-position:left;
		font-size: 10rem; 
		font-family: 'BMHANNAPro';
	}
	#thirdWord{
		margin-left:200px;
		color:white;
		background-position:left;
		font-size:3rem;
		color:white;
		letter-spacing: 8px;
		word-spacing: 20px;
		font-family: BMHANNAPro;
	}
	#thomas{
		position :absolute;
		bottom: 0px;
		right: 200px; 
		width: auto; height: auto;
   		max-width: 50rem;
    	max-height: 20rem;
		animation: thomas linear 3s normal;
	}
	/*이미지 애니메이션 */
	@keyframes thomas{ 
   		from{right:-400px;}
   		to{right:200px}	
	}
	

</style>
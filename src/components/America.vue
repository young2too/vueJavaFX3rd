<template>
	<div class="America">
		<p id="firstWord"> <strong>Chick Chick</strong>
		<p id="secondWord"><strong>Pork Pork</strong></p>
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
		line-height: 2.2ch;
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
		font-size: 14rem;
		font-family: 'Times New Roman', Times, serif;
	}
	#secondWord{
		margin-left:200px;
		color:white;
		background-position:left;
		font-size: 14rem; 
		font-family: 'Times New Roman', Times, serif;
	}
	#thirdWord{
		margin-left:300px;
		color:white;
		background-position:left;
		font-size:4rem;
		color:white;
		letter-spacing: 5px;
		word-spacing: 5px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	#thomas{
		position :absolute;
		bottom: 0px;
		right: 20%; 
		width: auto; height: auto;
   		max-width: 1000px;
    	max-height: 900px;
		animation: thomas linear 3s normal;
	}
	/*이미지 애니메이션 */
	@keyframes thomas{ 
   		from{right:-40%;}
   		to{right:20%}	
	}

</style>
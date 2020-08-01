<template>
	<div class="America">
		<p id="firstWord"> <strong>Chick Chick</strong>
		<p id="secondWord"><strong>Pork Pork</strong></p>
		<p id="thirdWord"><strong>;</strong> 세상에서 제일 행복한 기차</p>
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
	}
	.America{
		width: 100%;
		height: 100%;
		position: absolute;
  		background-color: #D98E04;
  	}
	#firstWord{
		margin-top: 150px;
		margin-left: 200px;
		color:white;
		background-position:left;
		font-size: 8rem;
		font-family: 'Times New Roman', Times, serif;
	}
	#secondWord{
		margin-left:250px;
		color:white;
		background-position:left;
		font-size: 8rem; 
		font-family: 'Times New Roman', Times, serif;
	}
	#thirdWord{
		margin-left:250px;
		color:white;
		background-position:left;
		font-size:2.2rem;
		color:white;
		letter-spacing: 5px;
		word-spacing: 5px;
		font-family: 'Times New Roman', Times, serif;
	}
	#thomas{
		position :fixed;
		bottom: 50px;
		right: 300px; 
		width: auto; height: auto;
   		max-width: 2000px;
    	max-height: 300px;
		animation: thomas linear 2s normal;
	}
	/*이미지 애니메이션 */
	@keyframes thomas{ 
   		from{right:-400px;}
   		to{right:300px}	
	}

</style>
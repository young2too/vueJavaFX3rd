<template>
	<div class="America">
		<p id="firstWord"> Chick Chick
			<router-link :to="{name:'time',params:{name:'양식'}}">
				<span v-on:click="savesort('양식')">
					<a class="AmericaBtn" href="#">
						<img id="off" src="../assets/label/circlepork.png" />
						<img id="on" src="../assets/label/circleporkon.png" />
					</a>
				</span>
			</router-link>
		</p>
		<p id="secondWord">Pork Pork</p>
		<p id="thirdWord">"세상에서 제일 행복한 기차"</p>
		<img id="thomas" src="../assets/menu_Img/Thomas.png">
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
	p{
		margin: 0;
		padding: 0;
		line-height: 9rem;
	}
	.America{
		width: 100%;
		height: 100%;
		position: absolute;
  		background-color: #D98E04;
  	}
	#firstWord{
		margin-top: 200px;
		margin-left: 150px;
		color:white;
		background-position:left;
		font-size: 10rem;
		font-family: 'BMHANNAPro';
		
	}
	#secondWord{
		margin-left:150px;
		color:white;
		background-position:left;
		font-size: 10rem; 
		font-family: 'BMHANNAPro';
	}
	#thirdWord{
		margin-left:150px;
		color:white;
		background-position:left;
		font-size:3.1rem;
		color:white;
		letter-spacing: 8px;
		word-spacing: 20px;
		font-family: 'BMHANNAAir';
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
	#off{
	position:absolute;
	z-index: 100;
	width: auto; height: auto;
   	max-width: 15rem;
    max-height: 15rem;
	margin-top: -2%;
	margin-left: 5%;
}

#on{
	position:absolute;
	z-index: 100;
	width: auto; height: auto;
   	max-width: 15rem;
    max-height: 15rem;
	margin-top: -2%;
	margin-left: 5%;
}

.AmericaBtn img:last-child{display:none}
.AmericaBtn:hover img:first-child{display:none}
.AmericaBtn:hover img:last-child{display:inline-block}

</style>
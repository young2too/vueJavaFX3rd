<template>
	<div id="tuesdayPage">
		<div class="tuesdayFont">
			<span id="bigWord">화</span>
			<span id="firstWord">나서</span><br>
			<span id="secondWord">뛰쳐가고 싶은 날.</span><br>
			<span id="thirdWord">오늘 냉면 한 그릇?</span><br>
			<!-- <span id="fourthWord">#후루룩후루룩#원샷#머리가띵#</span> -->
		</div>
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
	span{
		line-height: 6rem;
	}
	#tuesdayPage{
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		position: absolute;
		background-image: url("../../assets/date_Img/tuesday.jpg");
		background-repeat: no-repeat;
  	}
	.tuesdayFont{
		margin-top: 15%;
		margin-left: 10%;
		color:white;
		background-position:left;
		font-family: 'BMHANNAPro';
		letter-spacing: 3px;
	}
	#bigWord{
		font-size: 8rem;
	}
	#firstWord {
		font-size: 4rem;
		
	}
	#secondWord{
		font-size: 4rem; 
	}
	#thirdWord{
		font-size: 4rem;
	}
	#fourthWord{
		/* margin:7px; */
		font-size:2rem;
		/* word-spacing: 20px; */
	}
</style>
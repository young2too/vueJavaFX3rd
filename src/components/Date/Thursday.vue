<template>
	<div id="thursdayPage">
		<div class="thursdayFont">
			<span id="bigWord"><strong>목</strong></span>
			<span id="firstWord">아프다 하고</span>
			<p id="secondWord">조퇴 하고싶은 날.</p>
			<p id="thirdWord">오늘 칼국수 한 그릇?</p>
			<p id="fourthWord">#국물처럼#어디론가흘러가고싶다#만두추가요</p>
		</div>
	</div>
</template>

<script>
export default {

	methods: {
	}
}
</script>
<style scoped>
	p{
		margin: 0;
		padding: 0;
	}
	#thursdayPage{
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		position: absolute;
		background-image: url("../../assets/date_Img/thursday.jpg");
		background-repeat: no-repeat;
		opacity: 0.8;
  	}
	.thursdayFont{
		margin-top: 100px;
		margin-left: 150px;
		color:white;
		background-position:left;
	}
	#bigWord{
		font-size: 8rem;
	}
	#firstWord {
		font-size: 6rem;
		/* font-family: 'Times New Roman', Times, serif; */
	}
	#secondWord{
		font-size: 6rem; 
		/* font-family: 'Times New Roman', Times, serif; */
	}
	#thirdWord{
		font-size: 6rem; 
		/* font-family: 'Times New Roman', Times, serif; */
	}
	#fourthWord{
		font-size:2.2rem;
		letter-spacing: 5px;
		word-spacing: 5px;
		font-family: 'Times New Roman', Times, serif;
	}
</style>
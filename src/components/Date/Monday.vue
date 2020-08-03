<template>
	<div id="mondayPage">
		<div class="mondayFont">
			<span id="bigWord"><strong>월</strong></span>
			<span id="firstWord">요병은</span>
			<p id="secondWord">불치병.</p>
			<p id="thirdWord">오늘 짬뽕 한 그릇?</p>
			<p id="fourthWord">#정신바짝#월요병해소#단무지더주세요</p>
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
	#mondayPage{
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		position: absolute;
		background-image: url("../../assets/date_Img/wednesday.jpg");
		background-repeat: no-repeat;

  	}
	.mondayFont{
		margin-top: 300px;
		margin-left: 300px;
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
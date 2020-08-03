<template>
	<div id="wednesdayPage">
		<div class="wednesdayFont">
			<span id="bigWord"><strong>수</strong></span>
			<span id="firstWord">고한</span>
			<p id="secondWord">친구들과 함께.</p>
			<p id="thirdWord">오늘 햄버거 한 세트?</p>
			<p id="fourthWord">#콜라는#제로콜라#다이어트#햄최몇</p>
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
	p{
		margin: 0;
		padding: 0;
	}
	#wednesdayPage{
		width: 100%;
		height: 1080px;
		background-size: cover;
		position: absolute;
		background-image: url("../../assets/date_Img/wednesday.jpg");
		background-repeat: no-repeat;
  	}
	.wednesdayFont{
		margin-top: 200px;
		margin-left: 150px;
		color:white;
		background-position:left;
	}
	#bigWord{
		font-size: 6rem;
	}
	#firstWord {
		font-size: 4rem;
		/* font-family: 'Times New Roman', Times, serif; */
	}
	#secondWord{
		font-size: 4rem; 
		/* font-family: 'Times New Roman', Times, serif; */
	}
	#thirdWord{
		font-size: 4rem; 
		/* font-family: 'Times New Roman', Times, serif; */
	}
	#fourthWord{
		font-size:1rem;
		letter-spacing: 5px;
		word-spacing: 5px;
		font-family: 'Times New Roman', Times, serif;
	}
</style>
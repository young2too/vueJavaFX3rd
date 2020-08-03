<template>
	<div id="fridayPage">
		<div class="fridayFont">
			<span id="bigWord"><strong>금</strong></span>
			<span id="firstWord">요일은</span>
			<p id="secondWord">하체 하는 날.</p>
			<p id="thirdWord">오늘 돈까스 한 그릇?</p>
			<p id="fourthWord">#단백질#레그데이#불금#헬스클럽</p>
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
	#fridayPage{
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		position: absolute;
		background-image: url("../../assets/date_Img/friday.jpg");
		background-repeat: no-repeat;
		opacity: 0.8;
  	}
	.fridayFont{
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
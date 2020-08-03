<template>
	<div id="tuesdayPage">
		<div class="tuesdayFont">
			<span id="bigWord"><strong>화</strong></span>
			<span id="firstWord">나서</span>
			<p id="secondWord">뛰쳐가고 싶은날.</p>
			<p id="thirdWord">오늘 냉면 한 그릇?</p>
			<p id="fourthWord">#후루룩#원샷#머리가띵#돈까스는디저트</p>
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
	#tuesdayPage{
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		position: absolute;
		background-image: url("../../assets/date_Img/tuesday.jpg");
		background-repeat: no-repeat;
		opacity: 0.8;
  	}
	.tuesdayFont{
		margin-top: 150px;
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
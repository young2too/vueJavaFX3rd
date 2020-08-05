<template>
	<div id="wednesdayPage">
		<div class="wednesdayFont">
			<span id="bigWord">수</span>
			<span id="firstWord">고한</span><br>
			<span id="secondWord">친구들과 함께.</span><br>
			<span id="thirdWord">오늘 햄버거 한 세트?</span><br>
			<span id="fourthWord">#콜라는#제로콜라#다이어트#햄최몇</span>
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
	span{
      line-height: 5rem;
   }
   #wednesdayPage{
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      position: absolute;
      background-image: url("../../assets/date_Img/wednesday.jpg");
      background-repeat: no-repeat;
     }
   .wednesdayFont{
      margin-top: 15%;
      margin-left: 10%;
      color:white;
      background-position:left;
      /* letter-spacing: 3px; */
	  font-family: 'BMHANNAPro';
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
	  margin-top:150px;
      font-size:2.3rem;
	  font-family: 'BMHANNAAir';
      /* word-spacing: 20px; */
   }
</style>
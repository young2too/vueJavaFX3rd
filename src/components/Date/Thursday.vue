<template>
	<div id="thursdayPage">
		<div class="thursdayFont">
			<span id="bigWord"><strong>목</strong></span>
			<span id="firstWord">아프다 하고</span><br>
			<span id="secondWord">조퇴 하고싶은 날.</span><br>
			<span id="thirdWord">오늘 칼국수 한 그릇?</span><br>
			<span id="fourthWord">#국물처럼#어디론가흘러가고싶다#만두</span><br>
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
   #thursdayPage{
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      position: absolute;
      background-image: url("../../assets/date_Img/thursday.jpg");
      background-repeat: no-repeat;
     }
   .thursdayFont{
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
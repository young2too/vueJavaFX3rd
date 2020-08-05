<template>
	<div id="mondayPage">
		<div class="mondayFont">
			<span id="bigWord">월</span>
			<span id="firstWord">요병은</span><br>
			<span id="secondWord">불치병.</span><br>
			<span id="thirdWord">오늘 짬뽕 한 그릇?</span><br>
			<span id="fourthWord">#정신바짝#월요병해소#이열치열</span>
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
   #mondayPage{
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      position: absolute;
      background-image: url("../../assets/date_Img/monday.jpg");
      background-repeat: no-repeat;
     }
   .mondayFont{
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
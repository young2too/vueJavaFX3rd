<template>
	<div id="fridayPage">
		<div class="fridayFont">
			<span id="bigWord">금</span>
			<span id="firstWord">요일은</span><br>
			<span id="secondWord">하체 하는 날.</span><br>
			<span id="thirdWord">오늘 돈까스 한 그릇?</span><br>
			<span id="fourthWord">#단백질#레그데이#불금#헬스클럽</span><br>
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
   #fridayPage{
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      position: absolute;
      background-image: url("../../assets/date_Img/friday.jpg");
      background-repeat: no-repeat;
     }
   .fridayFont{
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
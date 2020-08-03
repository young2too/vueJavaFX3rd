<template>
<!-- 중식 메인화면  -->
	<div id="chinese">
	<div id="wow">
	<!-- 	<button id="Btn">
			<img src= onmouseover="this.src='../assets/footerImg/yesbtn.png'" onmouseout="this.src='../assets/footerImg/noBtn.png'">
		</button> -->

	<a class="Btn" href="#">
        <img src="../assets/footerImg/noBtn.png" />
        <img src="../assets/footerImg/yesbtn.png" />
    </a>
			<h1></h1>
			<!-- 헤더도 잘 꾸미면 좋을것 같고 -->
		

	
	</div>	
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
#wow{
 	padding-top: 500px;
	padding-left: 600px; 

}
/* #Btn{
	width:300px;
	height:200px;
	background-color:transparent;  
	border:0px transparent solid;

} */
.Btn img:last-child{display:none}
.Btn:hover img:first-child{display:none}
.Btn:hover img:last-child{display:inline-block}

#chinese{
  display:inline-block;
  position: relative;
  padding-left:15%;
  margin-left: 300px;
  height: 800px;
  background-image: url("../assets/footerImg/chinese1.png");
  background-repeat: no-repeat;
}

</style>
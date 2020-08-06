<template>
	<div id="footerWrapper">
		<ul>
			<li>개발자 : 이영기, 오혜원, 정동준, 양예주, 김준용 </li><br>
			<li>주소 : 서울특별시 종로구 묘동 돈화문로 26 KG아이티뱅크 401</li><br>
			<li>대표메일 : <a href='mailto:abcd@naver.com'>abcd@naver.com</a></li><br>
			<li>고객센터 : <a href='tel:010-1234-5678'>010-1234-5678</a></li><br>
		</ul>
		<div id="cupon">
			<a href='https://pf.kakao.com/_KBMvxl'>
			<img id="cuponImg" src='../assets/footerImg/cupon.png'>
			</a>
		</div>
	</div>

</template>

<script>
export default {
	
}
</script>

<style scoped>
#cuponImg{
	width: auto; height: auto;
   	max-width: 15rem;
    max-height: 15rem;
}

#first{
	width:60px;
	height:60px;
}

#footerWrapper{
	left:0px;
	bottom: 0px;
	width:100%;
	padding-top: 12%;
	margin-left: 7%;
	word-spacing: 1rem;
}
li{
	font-size: 3rem;
	font-family: 'BMHANNAPro';
	text-align:left;
	list-style: none;
	color: white;
}

#cupon{
	margin-left:61%;
	width: auto; height: auto;
   	max-width: 10rem;
    max-height: 10rem;
}
img:hover{
  transform:scale(1.0);
  transition : none;
}
/* ul{
	list-style: none;
	font-size: 20px;
	float:left;
} */


a:link { color: darkslategray; text-decoration: none; }

a:visited { color: darkslategray; text-decoration: none; }

a:hover { color: darkturquoise; font-weight: bold; text-decoration: underline; }

a:active { color: white; background-color: green; }

</style>

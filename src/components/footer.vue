<template>
	<div id="footerWrapper">
		<div id="sosBtn">
			<a href='http://www.baemin.com'>
			<img id="sosImg" src='../assets/footerImg/sos.png'>
			</a>
			<a href='http://www.yogiyo.co.kr'>
			<img id="yogi" src='../assets/footerImg/yogi.png'>
			</a>
		</div>
		<div id="Name">
			<h4><a href="/">(주)KG아이티뱅크 식사 추천 </a></h4>
		</div>
		
		<ul>
			<li>개발자 : 이영기, 오혜원, 정동준, 양예주, 김준용  </li>
			<li>주소 : 서울특별시 종로구 묘동 돈화문로 26 kg아이티뱅크</li>
			<li>대표메일 : <a href='mailto:abcd@naver.com'>abcd@naver.com</a></li>
			<li>고객센터 : <a href='tel:010-1234-5678'>010-1234-5678</a></li>
		</ul>

		<div id="up">
			<a href="#" title="맨위로"><img src='../assets/footerImg/up.png'></a>
		</div>

		
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
Img{
	width:60px;
	height:60px;
}
#sosBtn{
	text-align: right;
	margin-right: 30%;
}

/* @font-face {
	font-family: "Juaaa";
	src: url('../assets/footerImg/BMJUA_ttf.ttf');
} */
#Name{ 

	font-family: "Juaaa";
	margin-left:40px;
}
#footerWrapper{
	text-align:left;
	font-weight:bold;
	font-size:16px;
	position: relative; 
	top: 50%; 
	height: 240px; 
	margin-top: -120px;

}
img:hover{
  transform:scale(1.0);
  transition : none;
}
ul{
	list-style: none;
}

a:link { color: darkslategray; text-decoration: none; }

a:visited { color: darkslategray; text-decoration: none; }

a:hover { color: darkturquoise; font-weight: bold; text-decoration: underline; }

a:active { color: white; background-color: green; }

#up{
	display:scroll;
	position:fixed;
	bottom:10px;
	right:10px;
}
</style>
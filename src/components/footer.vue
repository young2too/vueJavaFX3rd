<template>
	<div id="footerWrapper">
		<div id="Name">
			<h2><a href="/">(주)KG아이티뱅크 식사 추천 </a></h2>
		</div>
		<div id="sosBtn">
			<a href='http://www.baemin.com'>
			<img id="sosImg" src='../assets/footerImg/sos.png'>
			</a>
			<a href='http://www.yogiyo.co.kr'>
			<img id="yogi" src='../assets/footerImg/yogi.png'>
			</a>
			<a href='http://www.bdtong.co.kr'>
			<img id="tong" src='../assets/footerImg/tong.png'>
			</a>
		</div>
		<ul>
			<li>개발자 : 이영기, 오혜원, 정동준, 양예주, 김준용 </li><br>
			<li>주소 : 서울특별시 종로구 묘동 돈화문로 26 kg아이티뱅크</li><br>
			<li>대표메일 : <a href='mailto:abcd@naver.com'>abcd@naver.com</a></li><br>
			<li>고객센터 : <a href='tel:010-1234-5678'>010-1234-5678</a></li><br>
		</ul>

		<div id="up">
			<a href="/"><img id="first" src='../assets/footerImg/up.png'></a>
		</div>
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
	width:300px;
	height:200px;
}

#sosBtn{
	margin-left: 50px;
}

#tong{
	width:60px;
	height:60px;
}

#yogi{
	width:60px;
	height:60px;
}

#sosImg{
	width:60px;
	height:60px;
}

#first{
	width:60px;
	height:60px;
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
	left:0px;
	bottom: 0px;
	width:100%;
	height:230px;
	padding-top: 10%;
	margin-left: 20%;

/* 	padding: 20px;
	background-color: rgba(4, 157, 191, 0.5);
	border-radius: 50px 50px; */
}

#cupon{
		float:left;
		margin-left:100px;
		width:300px;
		height:200px;
}
img:hover{
  transform:scale(1.0);
  transition : none;
}
ul{
	list-style: none;
	font-size: 20px;
	float:left;
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
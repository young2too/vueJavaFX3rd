<template>
	<div class="intro">
		<header class="jpHeader">
			<!-- 글자 -->
			<div class="font">
				<div class="writeJapan" STYLE="writing-mode: tb-ie">
					<b>満</b><br>
					<b>足</b><br>
					<b>の</b><br>
					<b>温</b><br>
					<b>度</b><br>
					<b>が</b><br>
					<b>違</b><br>
					<b>う</b>
				</div>
				<div class="writeKorea" STYLE="writing-mode: tb-ie">
					만<br>
					족<br>
					의<br>
					온<br>
					도<br>
					가<br>
					다<br>
					르<br>
					다<br>
				</div>
			</div>
				<!-- 새 -->
				
					<div class="bird-container bird-container--one">
						<div class="bird bird--one"></div>
					</div>
					
					<div class="bird-container bird-container--two">
						<div class="bird bird--two"></div>
					</div>
					
					<div class="bird-container bird-container--three">
						<div class="bird bird--three"></div>
					</div>
					
					<div class="bird-container bird-container--four">
						<div class="bird bird--four"></div>
					</div>
					
				

				<!-- 꽃 -->
				<div class="flower">
					<img src="../assets/menu_Img/flower.png" style="width: 500px; height:500px ;">
				</div>
				<div class="sushi">
					<img src="../assets/menu_Img/sushi.png" style="width: 400px; height:400px ;">
				</div>
				<!-- 초밥 -->
				<div class="flowerRight">
					<img src="../assets/menu_Img/flowerright.png" style="width: 500px; height:750px ;">
				</div>
				<!-- 라면 -->
				<div class="ramenWrap">
					<div class="ramen">
						<img src="../assets/menu_Img/ramen.png" style="width: 300px; height:300px ;">
					</div>
					<div class="smoke">
						<img src="../assets/menu_Img/smoke.png" style="width: 100px; height:100px ;">
					</div>
				</div>
		</header>
	</div>
</template>




<style scoped>
.font{
	position:fixed;
	margin-top:20px;
	margin-left:350px;
	background-position: left;
	z-index: 3;
}
.writeJapan{
	font-size: 350%;
	/* argin-left:210px; */
}
.writeKorea{
	color:#A4A4A4;
	font-size:280%;
	margin-top:-400%;
	margin-left:100px;
}
.ramenWrap{
	position: fixed;
	margin-top:10%;
	margin-left:30%;
	z-index: 3;
}
.smoke {
	margin-left:43%;
	margin-top:-105%;
	animation:Smoke 0.5s steps(5,strat) infinite alternate;
	-webkit-animation: Smoke 0.5s steps(5,start) infinite alternate;
}
@keyframes Smoke{
	from{
		visibility: visibility;
	}
	to{
		visibility: hidden;
	}
}
@-webkit-keyframes Smoke{
	from{
		visibility: visibility;
	}
	to{
		visibility: hidden;
	}
}

.ramen{
	margin-left:25%;
	margin-top:-42%;
}
.flower{
	position:fixed;
	margin-left:0;
	margin-top:0;
	z-index: 2;
}
.flowerRight{
	position:fixed;
	right:0;
	bottom:0;
	z-index: 3;
}
.sushi{
	position:fixed;
	margin-top:300px;
	margin-left:600px;
	opacity:0.7;
	z-index:3;
}
h1 {
	margin:20px;
	font-size: 400%;
  	font-weight: normal;
}
h2{
	font-size:50%;
	font-weight:normal;
}

.intro{
	width:100%;
	height:100%;
	background-color:#F8E0F1;
	background-size: 100% 100%;
	position: absolute;
	z-index:1;
}
.intro .jpHeader{
	margin-top:20px;
	display:block;
	text-align: left;
}

/*************************************************************** */

.bird {
	background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);
	background-size: auto 100%;
	width: 88px;
	height: 125px;
	will-change: background-position;
	
	animation-name: fly-cycle;
	animation-timing-function: steps(10);
	animation-iteration-count: infinite;
}
	.bird--one {
		animation-duration: 1s;
		animation-delay: -0.5s;		
	}
	
	.bird--two {
		animation-duration: 0.9s;
		animation-delay: -0.75s;
	}
	
	.bird--three {
		animation-duration: 1.25s;
		animation-delay: -0.25s;
	}
	
	.bird--four {
		animation-duration: 1.1s;
		animation-delay: -0.5s;
	}



.bird-container {
	position: absolute;
	top: 20%;
	z-index:2;
	left: -10%;
	transform: scale(0) translateX(-10vw);
	will-change: transform;
	
	animation-name: fly-right-one;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
}
	.bird-container--one {
		animation-duration: 15s;
		animation-delay: 0;
	}
	
	.bird-container--two {
		animation-duration: 16s;
		animation-delay: 1s;
	}
	
	.bird-container--three {
		animation-duration: 14.6s;
		animation-delay: 9.5s;
	}
	
	.bird-container--four {
		animation-duration: 16s;
		animation-delay: 10.25s;
	}
	

@keyframes fly-cycle {
	
	100% {
		background-position: -900px 0;
	}
	
}

@keyframes fly-right-one {
	
	0% {
		transform: scale(0.3) translateX(-10vw);
	}
	
	10% {
		transform: translateY(2vh) translateX(10vw) scale(0.4);
	}
	
	20% {
		transform: translateY(0vh) translateX(30vw) scale(0.5);
	}
	
	30% {
		transform: translateY(4vh) translateX(50vw) scale(0.6);
	}
	
	40% {
		transform: translateY(2vh) translateX(70vw) scale(0.6);
	}
	
	50% {
		transform: translateY(0vh) translateX(90vw) scale(0.6);
	}
	
	60% {
		transform: translateY(0vh) translateX(110vw) scale(0.6);
	}
	
	100% {
		transform: translateY(0vh) translateX(110vw) scale(0.6);
	}
	
}

@keyframes fly-right-two {
	
	0% {
		transform: translateY(-2vh) translateX(-10vw) scale(0.5);
	}
	
	10% {
		transform: translateY(0vh) translateX(10vw) scale(0.4);
	}
	
	20% {
		transform: translateY(-4vh) translateX(30vw) scale(0.6);
	}
	
	30% {
		transform: translateY(1vh) translateX(50vw) scale(0.45);
	}
	
	40% {
		transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
	}
	
	50% {
		transform: translateY(0vh) translateX(90vw) scale(0.45);
	}
	
	51% {
		transform: translateY(0vh) translateX(110vw) scale(0.45);
	}
	
	100% {
		transform: translateY(0vh) translateX(110vw) scale(0.45);
	}
	
}

</style>
<template>
	<div class="intro">
		<header class="jpHeader">
			<!-- 글자 -->
			<div class="font">
				<div class="writeJapan" STYLE="writing-mode: tb-ie">
					<strong>
					<b>満</b><br>
					<b>足</b><br>
					<b>の</b><br>
					<b>温</b><br>
					<b>度</b><br>
					<b>が</b><br>
					<b>違</b><br>
					<b>う</b>
					</strong>
				</div>
				<div class="writeKorea" STYLE="writing-mode: tb-ie">
					<strong>
					만  	<router-link :to="{name:'time',params:{name:'일식'}}">
							<span v-on:click="savesort('일식')">
								<a class="JapanBtn" href="#">
									<img id="off" src="../assets/label/circleja.png" />
									<img id="on" src="../assets/label/circlejaon.png" />
								</a>
							</span>
					  	</router-link>
					<br>
					족<br>
					의<br>
					온<br>
					도<br>
					가<br>
					다<br>
					르<br>
					다<br>
					</strong>
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
				<!-- <div class="sushi">
					<img src="../assets/menu_Img/sushi.png" style="width: 400px; height:400px ;">
				</div> -->
				<!-- 초밥 -->
				<div class="flowerRight">
					<img src="../assets/menu_Img/flowerright.png" style="width: 500px; height:750px ;">
				</div>
				<!-- 라면 -->
				<div class="ramenWrap">
					<div class="ramen">
						<img src="../assets/menu_Img/ramen.png" style="width: 600px; height:600px ;">
					</div>
					<!-- <div class="smoke">
						<img src="../assets/menu_Img/smoke.png" style="width: 200px; height:200px ;">
					</div> -->
				</div>
		</header>
	</div>
</template>

<script>
export default {
   methods: {
		savesort(value){
			localStorage.setItem('sort', value);
		}
	}
}
</script>

<style scoped>
.font{
	position: absolute;
	margin-top: 7%;
	margin-left: 30%;
	background-position: left;
	z-index: 3;
}
.writeJapan{
	font-size: 3.9rem;
}
.writeKorea{
	color:white;
	font-size:4.2rem;
	margin-top:-418%;
	margin-left:100px;
	font-family: 'BMHANNAPro';
	line-height: 110%;
}
.ramenWrap{
	position: absolute;
	z-index: 3;
}
.smoke {
	margin-left:125%;
	margin-top:-95%;
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

.JapanBtn img:last-child{display:none}
.JapanBtn:hover img:first-child{display:none}
.JapanBtn:hover img:last-child{display:inline-block}


#on{
	position:absolute;
	z-index: 100;
	width: auto; height: auto;
   	max-width: 15rem;
    max-height: 15rem;
	margin-top: -25%;
	margin-left: 260%;
}

#off{
	position:absolute;
	z-index: 100;
	width: auto; height: auto;
   	max-width: 15rem;
    max-height: 15rem;
	margin-top: -25%;
	margin-left: 260%;
}
.ramen{
	margin-left:120%;
	margin-top: 50%;
}
.flower{
	position:absolute;
	margin-left:0;
	margin-top:10%;
	z-index: 2;
}
.flowerRight{
	position:absolute;
	right:-10%;
	bottom:0;
	z-index: 3;
}
/* .sushi{
	position:fixed;
	margin-top:300px;
	margin-left:600px;
	opacity:0.7;
	z-index:3;
} */
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
	background-color:pink;
	background-size: 100% 100%;
	position: absolute;
	z-index:1;
}
/* .intro .jpHeader{
	margin-top:20px;
	display:block;
	text-align: left;
} */

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
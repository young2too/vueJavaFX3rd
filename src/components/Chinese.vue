<template>
   <div class="china">
	   <p id="first">니취팔러마?
		   <router-link :to="{name:'time',params:{name:'중식'}}">
				<span v-on:click="savesort('중식')">
					<a class="ChinaBtn" href="#">
						<img id="off" src="../assets/label/circlechi.png"/>
						<img id="on" src="../assets/label/circlechion.png" />
					</a>
				</span>
		</router-link>
	   </p>
	   <p id="second">你吃饭了吗？</p>
	   <p id="third">밥먹었니?</p>
      	<img id="chaImg" src="../assets/footerImg/black.png" >
      
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
.china{
   background-color: rgb(217, 61, 74);
   position: absolute;
   width:100%;
   height:100%;
}

p{
	margin: 0;
	padding: 0;
	line-height: 9rem;
}

#first{
	margin-top: 200px;
	margin-left: 250px;
	color:white;
	background-position:left;
	font-size: 7rem;
	font-family: 'BMHANNAPro';
	text-decoration: underline;
}

#second{
	margin-top: 0px;
	margin-left: 250px;
	color:white;
	background-position:left;
	font-size: 5rem;
	font-family: sans-serif;
}

#third{
	margin-top: 0px;
	margin-left: 250px;
	color:white;
	background-position:left;
	font-size: 5rem;
	font-family: 'BMHANNAPro';
}
#chaImg{
   position :absolute;
		bottom: 0px;
		right: 400px; 
		width: 400px; height: 400px;
   		max-width: 30rem;
    	max-height: 30rem;
}

.ChinaBtn img:last-child{display:none}
.ChinaBtn:hover img:first-child{display:none}
.ChinaBtn:hover img:last-child{display:inline-block}


#on{
	position:absolute;
	z-index: 100;
	width: auto; height: auto;
   	max-width: 15rem;
    max-height: 15rem;
	margin-top: -2%;
	margin-left: 18%;
}

#off{
	position:absolute;
	z-index: 100;
	width: auto; height: auto;
   	max-width: 15rem;
    max-height: 15rem;
	margin-top: -2%;
	margin-left: 18%;
}

</style>
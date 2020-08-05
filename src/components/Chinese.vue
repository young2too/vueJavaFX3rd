<template>
   <div class="china">
      <img id="chaImg" src="../assets/footerImg/chinese1.png" >
      <router-link :to="{name:'time',params:{name:'중식'}}">
				<span v-on:click="savesort('중식')">
					<img id="ChinaBtn" src="../assets/label/circlechi.png" >
				</span>
		</router-link>
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

#chaImg{
   margin-left:300px;
}
#ChinaBtn{
	position:absolute;
	z-index: 100;
	width: auto; height: auto;
   max-width: 15rem;
   max-height: 15rem;
	margin-top: 10%;
	margin-left: -10%;
}

</style>
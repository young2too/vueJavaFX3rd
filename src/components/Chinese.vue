<template>
   <div class="china">
      <img id="chaImg" src="../assets/footerImg/chinese1.png" >
		<a class="Btn" href="#">
			<img src="../assets/footerImg/noBtn.png" />
			<img src="../assets/footerImg/yesbtn.png" />
   		</a>

      <!-- <a class="Btn" href="#">
        <img src="../assets/footerImg/noBtn.png" />
        <img src="../assets/footerImg/yesbtn.png" />
    	</a> -->

   </div>
</template>

<script>
export default {
   data(){
   },
   methods: {
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
   width:900px;
   height:700px;
   margin-left:200px;
}

.Btn img:last-child{display:none}
.Btn:hover img:first-child{display:none}
.Btn:hover img:last-child{display:inline-block}

</style>
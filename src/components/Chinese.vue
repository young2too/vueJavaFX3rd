<template>
   <div class="china">
      <div id="text">
      <p id="first">니취팔러마?</p>
      <p id="second">你吃饭了吗？</p>
      <p id="third">밥 먹었니?
         <img id="black" src="../assets/footerImg/black.png" />
      </p>
      
      <!-- <a class="Btn" href="#">
        <img src="../assets/footerImg/noBtn.png" />
        <img src="../assets/footerImg/yesbtn.png" />
    </a> -->
    </div>
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


#first{
      margin-top:200px;
		margin-left: 200px;
		color:white;
		background-position:left;
		font-size: 8rem;
		font-family: 'BMHANNAPro';
      text-decoration: underline;

		
	}
#second{
		color:white;
		background-position:left;
		font-size: 6rem;
		font-family: sans-serif;
      margin-left:200px;
      margin-top:5px;

		
	}
#third{
      margin-top:5px;
		margin-left: 200px;
		color:white;
		background-position:left;
		font-size: 6rem;
		font-family: 'BMHANNAPro';

	}
p{
		margin: 0;
		padding: 0;
		line-height: 1.8ch;
	}
#black{
   width:400px;
   height:400px;
   margin-left: 250px;
  position:absolute;
}
</style>
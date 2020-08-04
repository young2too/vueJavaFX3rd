<template>
	<div class="Korea">
    	<p>아름다운 <br>밥이에요~</p>
		<img id="riceImg" src="../assets/menu_Img/rice123.png">
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

.Korea{
	text-align: left;
	width:100%;
	height:100%;
	position:absolute;
	background-color: #f2c84b;
}


#riceImg{
		position :absolute;
		bottom: 1rem;
		right: 0; 
		width: auto; height: auto;
   		max-width: 35rem;
    	max-height: 35rem;
		
}

	p { 
	font-size: 9rem;
	color : white;
	font-family: 'BMHANNAPro';
	margin-top: 13%;
	margin-left: 10%;
	line-height: 10rem;
}
</style> 
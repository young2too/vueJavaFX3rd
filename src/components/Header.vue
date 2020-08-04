<template>
	<div class="headerWrapper">
		<div class="header">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
			<nav>
				<h1>
				<KGImg></KGImg>
				오늘 뭐먹지
				<backImg></backImg>
				</h1>
			</nav>
		</div>
	</div>	
</template>

<script>
import KGImg from '../components/KGBtn.vue';
import backImg from '../components/backBtn.vue';

export default {
	components:{
	'KGImg':KGImg,
	'backImg':backImg
  }
}

</script>

<style scoped>

.headerWrapper{
	display:block;
	text-align: left;
}
.header{
	width:100%;
	height: 75px;
	padding: 1rem;
	color: white;
	font-weight: bold;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
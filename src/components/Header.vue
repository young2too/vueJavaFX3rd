<template>
	<div class="headerWrapper">
		<div class="header">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
			<h1>
				<KGImg></KGImg>
				아이티뱅크 저녁식사 추천
				<backImg></backImg>
			</h1>
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
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
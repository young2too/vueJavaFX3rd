<template>
	<transition>
	<div id="map"></div>
	
	</transition>
</template>

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=05c24645841825607c18ae5630dde438"></script>
<script>
var container = document.getElementById('map');
	var options = {
		center: new kakao.maps.LatLng(37.571001, 126.992493),
		level: 3
	};
	var map = new kakao.maps.Map(container, options);
export default {
	data(){
		return{
			kakaomap:map
		}
	}
}
</script>

<style scoped>
#map{
	width:80%;
	height:80%;
}


</style>
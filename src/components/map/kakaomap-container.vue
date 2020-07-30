<template>
    <div id="map">

	</div>
</template>

<script>


export default {
	
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
			/* global kakao */
			script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=05c24645841825607c18ae5630dde438&libraries=services';
            script.onload = () => kakao.maps.load(this.initMap);
            
            document.head.appendChild(script);
        }
    },
    methods: {
        initMap() {
            var container = document.getElementById('map');
            var options = {
              center: new kakao.maps.LatLng(37.570894,126.992528),
			  level: 5,
            };

			var map = new kakao.maps.Map(container, options);
			//마커추가하려면 객체를 아래와 같이 하나 만든다.
			var addList=localStorage.getItem('addresses');
			var geocoder = new kakao.maps.services.Geocoder();

			geocoder.addressSearch('종로16길 12,서울 종로구 종로 116',function(result,status){
			if (status === kakao.maps.services.Status.OK) {
       			var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        		// 결과값으로 받은 위치를 마커로 표시합니다
        		var marker = new kakao.maps.Marker({
            		map: map,
					position: coords,
					title:'종로제면소'
				});
				} 
			})
			// var markers = [];
			// for(var i=0;i<addList.length;i++){
				
			// 	geocoder.addressSearch(addList[i],function(result,status){
			// 		if (status === kakao.maps.services.Status.OK) {
       		// 			var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        	// 			// 결과값으로 받은 위치를 마커로 표시합니다
        	// 			var marker = new kakao.maps.Marker({
            // 				map: map,
			// 				position: coords,
			// 				title:addList[i],
			// 			});
			// 			markers.push(marker);
			// 	    } 
			// 	})
			// }
		},
    }
}
</script>

<style>
#map {
    width: 400px;
    height: 300px;
	float:left;
}
</style>
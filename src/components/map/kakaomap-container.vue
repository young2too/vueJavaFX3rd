<template>
    <div id="map">
		<div class="sideData">
		{{ sideData }}
		</div>
	</div>
</template>

<script>
import backBtn from '../backBtn.vue';


export default {
	data(){
		return{
			infowindows:[],
			sideData:''
		}
	},
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
			/* global kakao */
			script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=05c24645841825607c18ae5630dde438&libraries=services,clusterer';
            script.onload = () => kakao.maps.load(this.initMap);
            
            document.head.appendChild(script);
        }
	},
    methods: {
        initMap() {
			var markers=[];
			window.addEventListener('side-key-localstorage-changed', (event) => {
				this.sideData = event.detail.storage;
			});
			
            var container = document.getElementById('map');
            var options = {
              center: new kakao.maps.LatLng(37.570894,126.992528),
			  level: 3,
            };

			var map = new kakao.maps.Map(container, options);
			//마커추가하려면 객체를 아래와 같이 하나 만든다.


			var addList=localStorage.getItem('addresses').split(',');
			var shopList=localStorage.getItem('shopList').split(',');
			var geocoder = new kakao.maps.services.Geocoder();


			var shopListCounter = 0;

			var shopDistanceList=[];//가게와의 거리를 저장하는 변수

			for(var i=0;i<addList.length;i++){
				geocoder.addressSearch(addList[i],function(result,status){
					if (status === kakao.maps.services.Status.OK) {
       					var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        				// 결과값으로 받은 위치를 마커로 표시합니다
        				var marker = new kakao.maps.Marker({
            				map: map,
							position: coords,
						});

						markers.push(marker);

						var isMarkerOpened = false;
						var array = [];
						var kgitbank = new kakao.maps.LatLng(37.570894,126.992528);
						array.push(kgitbank);
						array.push(coords);
						var distance=getDistanceFromLatLonInKm(array);
						shopDistanceList.push(distance+"m");//각각의 거리 계산

					
						var	content= '<div class="wrap" name="'+shopList[shopListCounter]+'"><div class="mouse-over-info-window"><div class="title">'+shopList[shopListCounter]+'</div> 거리 : '+shopDistanceList[shopListCounter]+'</div></div>' 
						var overlay = new kakao.maps.CustomOverlay({
    						content: content,
   							position: marker.getPosition()
						});



    					// 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    					// 이벤트 리스너로는 클로저를 만들어 등록합니다 
    					// for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
						kakao.maps.event.addListener(marker, 'click', toggleMarker);

						function toggleMarker(){
							if(isMarkerOpened == true){
								overlay.setMap(null);
							}else{
								overlay.setMap(map);
							}
							isMarkerOpened = !isMarkerOpened;
						}
						shopListCounter++;

				    } 	
				})
			}
			

			localStorage.setItem('distances',shopDistanceList[1]);

			function getDistanceFromLatLonInKm(array) {
    			var lat1 = array[0].getLat();
    			var lng1 = array[0].getLng();
    			var lat2 = array[1].getLat();
    			var lng2 = array[1].getLng();
    
    			function deg2rad(deg) {
        			return deg * (Math.PI/180)
    			}
    			var r = 6371; //지구의 반지름(km)
    			var dLat = deg2rad(lat2-lat1);
    			var dLon = deg2rad(lng2-lng1);
    			var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
    			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    			var d = r * c; // Distance in km
   				return Math.round(d*1000);
			}
		},
	},
}
</script>

<style>
#map {
    width: 400px;
    height: 300px;
	float:left;
}

.sideData{
	position :absolute;
	z-index: 100;
	background:yellow;
}

.mouse-over-info-window{
	margin:auto;
	text-align:center;
	font-weight:bold;
	border-radius: 10px;
	border-style: hidden;
	background-color: azure;
}
.close {
	position: absolute;
	top: 10px;
	right: 10px;
	color: #888;
	width: 17px;
	height: 17px;
	background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');
}
.close:hover {
	cursor: pointer;
}
.wrap {
	position: absolute;
	left: 0;
	width: 288px;
	height: 132px;
	margin-left: -144px;
	text-align: left;
	overflow: hidden;
	font-size: 12px;
	font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
	line-height: 1.5;
}
.title {
	padding: 5px 0 0 10px;
	height: 30px;
	background: #eee;
	border-bottom: 1px solid #ddd;
	font-size: 18px;
	font-weight: bold;
}
</style>
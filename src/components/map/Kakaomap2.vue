<template>
	<div class="map_wrap">
    <div id="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>
    	<div id="menu_wrap" class="bg_white">
        <!-- <div class="option">
           	<div>
                <form onsubmit="searchPlaces(); return false;">
                    키워드 : <input type="text" value="이태원 맛집" id="keyword" size="15"> 
                    <button type="submit">검색하기</button> 
                </form>
            </div> -->
			<hr> 
        <ul id="placesList"></ul>
        </div>
		<div class="modalWrap">
		<modal v-show="showModal" v-on:close="showModal=false">
    		<h3 id="modalHeader" slot="header">123</h3>
    		<div id="modalBody" slot="body">12123!</div>	
  		</modal>
		</div>
    </div>
</template>

<script>
import shopList from "../../FoodData.json";
import modal from '../../components/common/Modal.vue';

export default {
	data(){
		return{
			showModal:false
		}
	},
	components:{
		'modal':modal
	},
	mounted() {
		this.$nextTick(function(){
			if (window.kakao && window.kakao.maps) {
            this.initMap(this.$el);
        } else {
            const script = document.createElement('script');
			/* global kakao */
			script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=05c24645841825607c18ae5630dde438&libraries=services';
            script.onload = () => kakao.maps.load(this.initMap);
            
            document.head.appendChild(script);
        }
		})  
	},
	methods:{
		initMap(){
		var markers = [];
		var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    		mapOption = {
        	center: new kakao.maps.LatLng(37.571121, 126.992473), // 지도의 중심좌표
        	level: 3 // 지도의 확대 레벨
    	};  

		// 지도를 생성합니다    
		var map = new kakao.maps.Map(mapContainer, mapOption); 

		// 장소 검색 객체를 생성합니다
		var ps = new kakao.maps.services.Places();  
		var kgitbank = new kakao.maps.LatLng(37.570894,126.992528);
		// 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
		var infowindow = new kakao.maps.InfoWindow({zIndex:1});

		displayPlaces(this);
		//map.setBounds(bounds);
		map.setCenter(kgitbank);
// 키워드로 장소를 검색합니다
// searchPlaces();

// // 키워드 검색을 요청하는 함수입니다
// function searchPlaces() {

//     var keyword = document.getElementById('keyword').value;

//     if (!keyword.replace(/^\s+|\s+$/g, '')) {
//         alert('키워드를 입력해주세요!');
//         return false;
//     }

//     // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
//     ps.keywordSearch( keyword, placesSearchCB); 
// }

// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
// function placesSearchCB(data, status, pagination) {
//     if (status === kakao.maps.services.Status.OK) {

//         // 정상적으로 검색이 완료됐으면
//         // 검색 목록과 마커를 표출합니다
//         displayPlaces(data);

//         // 페이지 번호를 표출합니다
//         displayPagination(pagination);

//     } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

//         alert('검색 결과가 존재하지 않습니다.');
//         return;

//     } else if (status === kakao.maps.services.Status.ERROR) {

//         alert('검색 결과 중 오류가 발생했습니다.');
//         return;

//     }
// }

// 검색 결과 목록과 마커를 표출하는 함수입니다
	function displayPlaces(vueCompo) {

	var nameList = [];//이름저장
	var addressList = [];//주소저장
	var printList = [];//전체저장
	var sort = localStorage.getItem('sort');
	for(var i=0;i<shopList.length;i++){
		if(shopList[i].FoodSort == sort){
			addressList.push(shopList[i].FoodAddress);
			nameList.push(shopList[i].FoodName);
			printList.push(shopList[i]);
		}
	}

    var listEl = document.getElementById('placesList'), 
    menuEl = document.getElementById('menu_wrap'),
    fragment = document.createDocumentFragment(), 
	//bounds = new kakao.maps.LatLngBounds(),
	liststr='';
    
    // 검색 결과 목록에 추가된 항목들을 제거합니다
    removeAllChildNods(listEl);
	var geocoder = new kakao.maps.services.Geocoder();
    // 지도에 표시되고 있는 마커를 제거합니다
	removeMarker();
	// console.log(addressList);
	// console.log(nameList);
	// console.log(printList);
	// 이 3개 콘솔 로그는 제대로 나왔음
	
	var printCount = 0;
    for ( var i=0; i<addressList.length; i++ ) {
		geocoder.addressSearch(addressList[i],function(result,status){
			// 마커를 생성하고 지도에 표시합니다
			if (status === kakao.maps.services.Status.OK) {
        		var placePosition = new kakao.maps.LatLng(result[0].y, result[0].x);
				var marker = addMarker(placePosition, printCount, printList[printCount].FoodName, map); 
            	var itemEl = getListItem(printCount, printList[printCount]); // 검색 결과 항목 Element를 생성합니다
				printCount++;
       			// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
				// LatLngBounds 객체에 좌표를 추가합니다
				
        		//bounds.extend(placePosition);
        		// 마커와 검색결과 항목에 mouseover 했을때
        		// 해당 장소에 인포윈도우에 장소명을 표시합니다
				// mouseout 했을 때는 인포윈도우를 닫습니다
				var array = [];
				var kgitbank = new kakao.maps.LatLng(37.570894,126.992528);
				array.push(kgitbank);
				array.push(placePosition);
				var distance=getDistanceFromLatLonInKm(array);

        		(function(marker1, title1, distance1, shopInfo1) {
            		kakao.maps.event.addListener(marker1, 'mouseover', function() {
                		displayInfowindow(marker1, title,distance1);
					});
					
            		kakao.maps.event.addListener(marker1, 'mouseout', function() {
             		   infowindow.close();
            		});

            		itemEl.addEventListener("mouseover", function () {
            	 	   displayInfowindow(marker1, title1,distance1);
            		});
					itemEl.addEventListener("click", function(){
						var context = '';
						var headerEl = document.getElementById('modalHeader');
						var contextEl = document.getElementById('modalBody');

						
						context += '이름 : '+shopInfo1.FoodName +'<br>';
						context += '주소 : '+shopInfo1.FoodAddress +'<br>';
						context += '메뉴 : '+shopInfo1.FoodMenu +'<br>';
						context += '전화 : '+shopInfo1.FoodTel +'<br>';
						context += '거리 : '+distance1+'m<br>';
						context += '<a href="'+shopInfo1.FoodURL+'">'+shopInfo1.FoodURL+'</a>';
						
						headerEl.innerHTML = title1;
						contextEl.innerHTML = context;
						vueCompo.showModal = true;
					});

            		itemEl.addEventListener("mouseout", function () {
                		infowindow.close();
					});
        		})(marker, printList[printCount-1].FoodName,distance, printList[printCount-1]);
				listEl.appendChild(itemEl);
				}
			});
    	}
    // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
    	// listEl.appendChild(fragment);
		// menuEl.scrollTop = 0;

		// 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
		
	}
// 검색결과 항목을 Element로 반환하는 함수입니다
	function getListItem(index, shopList) {

    	var el = document.createElement('li'),
    	itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
        	        '<div class="info">' +
            	    '   <h5>' + shopList.FoodName + '</h5>';

    	if (shopList.FoodAddress) {
        	itemStr += '    <span>' + shopList.FoodAddress + '</span>' +
                    '   <span class="jibun gray">' +  shopList.FoodAddress  + '</span>';
    	} else {
        	itemStr += '    <span>' +  shopList.FoodAddress  + '</span>'; 
    	}
                 
      	itemStr += '  <span class="tel">' + shopList.FoodTel  + '</span>' +
         	       '</div>';           

    	el.innerHTML = itemStr;
    	el.className = 'item';

    	return el;
	}

	// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
	function addMarker(position, idx, title, map) {
    	var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
        	imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
        	imgOptions =  {
            	spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
            	spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            	offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        	},
       	 	markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            	marker = new kakao.maps.Marker({
            	position: position, // 마커의 위치
            	image: markerImage 
			});
    	marker.setMap(map); // 지도 위에 마커를 표출합니다
		markers.push(marker);  // 배열에 생성된 마커를 추가합니다
		return marker;
	}

	// 지도 위에 표시되고 있는 마커를 모두 제거합니다
	function removeMarker() {
    	for ( var i = 0; i < markers.length; i++ ) {
        	markers[i].setMap(null);
    	}   
    	markers = [];
	}

	// 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
	// 인포윈도우에 장소명을 표시합니다
	function displayInfowindow(marker, title,distance) {
    	var content = '<div style="padding:5px;z-index:1;text-align:center;">' + title +' '+distance+'m</div>';

    	infowindow.setContent(content);
    	infowindow.open(map, marker);
	}

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
	 // 검색결과 목록의 자식 Element를 제거하는 함수입니다
	function removeAllChildNods(el) {
    	while (el.hasChildNodes()) {
        	el.removeChild (el.lastChild);
    			}
			}
			map.relayout();
		}
	}
}
</script>

 <style>
.map_wrap, .map_wrap * {margin:0;padding:0;font-family:'Malgun Gothic',dotum,'돋움',sans-serif;font-size:12px;}
.map_wrap a, .map_wrap a:hover, .map_wrap a:active{color:#000;text-decoration: none;}
.map_wrap {position:relative;width:130vh;height:80vh;margin-left:15%;}
#menu_wrap {position:absolute;top:0;left:0;bottom:0;width:250px;margin:10px 0 30px 10px;padding:5px;overflow-y:auto;background:rgba(255,255,255,0.3);z-index: 1;font-size:12px;border-radius: 10px;margin-left:130vh}
.bg_white {background:#fff;}
#menu_wrap hr {display: block; height: 1px;border: 0; border-top: 2px solid #5F5F5F;margin:3px 0;}
#menu_wrap .option{text-align: center;}
#menu_wrap .option p {margin:10px 0;}  
#menu_wrap .option button {margin-left:5px;}
#placesList li {list-style: none;}
#placesList .item {position:relative;border-bottom:1px solid #888;overflow: hidden;cursor: pointer;min-height: 65px;}
#placesList .item span {display: block;margin-top:4px;}
#placesList .item h5, #placesList .item .info {text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
#placesList .item .info{padding:10px 0 10px 55px;}
#placesList .info .gray {color:#8a8a8a;}
#placesList .info .jibun {padding-left:26px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png) no-repeat;}
#placesList .info .tel {color:#009900;}
#placesList .item .markerbg {float:left;position:absolute;width:36px; height:37px;margin:10px 0 0 10px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png) no-repeat;}
#placesList .item .marker_1 {background-position: 0 -10px;}
#placesList .item .marker_2 {background-position: 0 -56px;}
#placesList .item .marker_3 {background-position: 0 -102px}
#placesList .item .marker_4 {background-position: 0 -148px;}
#placesList .item .marker_5 {background-position: 0 -194px;}
#placesList .item .marker_6 {background-position: 0 -240px;}
#placesList .item .marker_7 {background-position: 0 -286px;}
#placesList .item .marker_8 {background-position: 0 -332px;}
#placesList .item .marker_9 {background-position: 0 -378px;}
#placesList .item .marker_10 {background-position: 0 -423px;}
#placesList .item .marker_11 {background-position: 0 -470px;}
#placesList .item .marker_12 {background-position: 0 -516px;}
#placesList .item .marker_13 {background-position: 0 -562px;}
#placesList .item .marker_14 {background-position: 0 -608px;}
#placesList .item .marker_15 {background-position: 0 -654px;}
#pagination a {display:inline-block;margin-right:10px;}
#pagination .on {font-weight: bold; cursor: default;color:#777;}
</style>
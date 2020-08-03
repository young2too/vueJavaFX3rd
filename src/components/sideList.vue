<template>
	<div id="sideListWrapper">
		<div class="sideList">
		<ul>
			<li class='alist' v-for='item in shops' v-on:mouseover="callMarker(item)">
				{{ item }}
			</li>
		</ul>
		</div>
	</div>
</template>

<script>
import shopList from "../FoodData.json";

export default {
	props:{
		sort:{//선택한 음식 종
			type:String,
			default:''
		}
	},
	created(){
		var distanceList=[];
		distanceList = localStorage.getItem('distances').split(',');
		
		console.log(distanceList);

		var addressList = [];
		var nameList=[];
		for(var i=0;i<shopList.length;i++){
			if(shopList[i].FoodSort == this.sort){
				addressList.push(shopList[i].FoodAddress);
				nameList.push(shopList[i].FoodName);
			}
		}
		localStorage.setItem('addresses',addressList);
		localStorage.setItem('shopList',nameList);


		this.shops=nameList;
	},
	methods:{
		callMarker(value){
			localStorage.setItem('sideData',value);
			window.dispatchEvent(new CustomEvent('side-key-localstorage-changed', {
  				detail: {
    				storage: localStorage.getItem('sideData')
  				}
			}));
		}
	},
}
</script>

<style scoped>
#sideListWrapper{
	float:left;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
 
li {
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
}
 
li:last-child {
  border: none;
}
 
li.alist{
  text-decoration: none;
  color: #000;
  display: block;
  width: 200px;
 
  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
  -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
  -o-transition: font-size 0.3s ease, background-color 0.3s ease;
  -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
  transition: font-size 0.3s ease, background-color 0.3s ease;
}
 
li.alist:hover {
  font-size: 30px;
  background: #f6f6f6;
  cursor:pointer;
}

</style>
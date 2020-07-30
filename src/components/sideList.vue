<template>
	<div id="sideListWrapper">
		<div class="sideList">
		<ul>
			<li v-for="item in shops">
				{{ item.FoodName }}
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
		var returnList =[];
		var addressList = [];
		for(var i=0;i<shopList.length;i++){
			if(shopList[i].FoodSort == this.sort){
				returnList.push(shopList[i]);
				addressList.push(shopList[i].FoodAddress);
			}
		}
		localStorage.setItem('addresses',addressList);
		this.shops=returnList;
	}
}
</script>

<style scoped>
#sideListWrapper{
	float:left;
}

li{
	list-style:none;
	padding:5px;
}

li:hover{
	cursor:pointer;
}
</style>
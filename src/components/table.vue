<template>
  	<div class="imgtb">
      <div class="table-row">
        <div class="table-cell">
			      <router-link :to="{name:'time',params:{name:'한식'}}"><span v-html="koreanimg"></span></router-link>
        </div>
        <div class="table-cell">
			      <router-link :to="{name:'time',params:{name:'일식'}}"><span v-html="japanimg"></span></router-link>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell-desc">
          {{ koreanText }}
        </div>
        <div class="table-cell-desc">
          {{ japanText }}
        </div>
      </div>
	    <div class="table-row">
        <div class="table-cell">
			      <router-link :to="{name:'time',params:{name:'중식'}}"><span v-html="chinaimg" ></span></router-link>
        </div>
		    <div class="table-cell">
            <router-link :to="{name:'time',params:{name:'양식'}}"><span v-html="fastfoodimg"></span></router-link>
        </div>
      </div>
      <div class="table-row">
        <div class="table-cell-desc">
          {{ chinaText }}
        </div>
        <div class="table-cell-desc">
          {{ fastfoodText }}
        </div>
      </div>
    </div>
</template>

<script>
var imgpath = ['../src/assets/menu_img/kor.PNG',
'../src/assets/menu_Img/jap.PNG',
'../src/assets/menu_Img/china.PNG',
'../src/assets/menu_Img/fastfood.PNG']

export default {
  name: 'table',
  data () {
    return{
      koreanimg:'<img src="'+imgpath[0]+'">',
      japanimg:'<img src='+imgpath[1]+'>',
      chinaimg:'<img src='+imgpath[2]+'>',
      fastfoodimg:'<img src='+imgpath[3]+'>',

      koreanText:'한식',
      japanText:'일식',
      chinaText:'중식',
      fastfoodText:'패스트푸드',
    }
  },
}
</script>

<style>

img{
  width:100px;
  height:100px;
  
}

.imbtb {
  display: table;
}
.table-row {
  display: table-row;
}
.table-cell{
  border : 1px solid black;
  display: table-cell;
  padding : 5px;
  text-align:center;
}
.table-cell-desc{
  border : none;
  display: table-cell;
  padding : 5px;
  text-align:center;
  font-weight:bold;
}

.middle {
  vertical-align: middle;
}
.bottom {
  vertical-align: bottom;
}

img:hover{
  transform:scale(2.0);
  transition : all ease 1s;
  cursor: pointer;
}
</style>

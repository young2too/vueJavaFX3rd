<template>
<table>
  	<div class="imgtb">
      <div class="table-row">
        <div class="table-cell">
			      <router-link :to="{name:'time',params:{name:'한식'}}"><span v-html="koreanimg" v-on:click="savesort('한식')"></span></router-link>
        </div>
        <div class="table-cell">
			      <router-link :to="{name:'time',params:{name:'일식'}}"><span v-html="japanimg" v-on:click="savesort('일식')"></span></router-link>
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
			      <router-link :to="{name:'time',params:{name:'중식'}}"><span v-html="chinaimg" v-on:click="savesort('중식')"></span></router-link>
        </div>
		    <div class="table-cell">
            <router-link :to="{name:'time',params:{name:'양식'}}"><span v-html="fastfoodimg" v-on:click="savesort('양식')"></span></router-link>
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
    </table>
</template>

<script>
var imgpath = ['../src/assets/menu_img/kor.PNG',
'../src/assets/menu_Img/japan.PNG',
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
      fastfoodText:'양식',
    }
  },
methods:{
  savesort(){
    localStorage.setItem('sort', value);
  }
}
}
</script>

<style>
table {
  border-spacing: 20px 5px;
      }
img{
  width:180px;
  height:180px;
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
  padding : 1px;
  text-align:center;
  border-radius: 5px;
}
.table-cell-desc{
  border : none;
  display: table-cell;
  padding : 5px;
  text-align:center;
  font-family: Juaaa;
  font-weight: bold;
}
.middle {
  vertical-align: middle;
}
.bottom {
  vertical-align: bottom;
}
 /* img:hover{
  transform:scale(2.0);
  transition : all ease 1s;
  cursor: pointer;
} */
</style>
<template>
  <div id="main">
    <VueHeader></VueHeader>
    <VueTable></VueTable>
  </div>
</template>

<script>
import VueTable from '../components/table.vue';
import VueHeader from '../components/Header.vue';

export default {
  components:{
    'VueTable':VueTable,
	'VueHeader':VueHeader,
  }
}

</script>

<style>
#main{
	display:inline-block;
  position:absolute;
  left:50%;
  width: 200px;
  margin : 0;
  padding :0;
  width: 50%;
  height : 50%;
  margin-left:-100px;
  text-align:center;
}
</style>

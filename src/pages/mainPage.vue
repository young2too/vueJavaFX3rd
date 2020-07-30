<template>
  <div id="main">
    <VueHeader></VueHeader>
    <VueTable></VueTable>
    <VueFooter></VueFooter>
  </div>
</template>

<script>
import VueTable from '../components/table.vue';
import VueHeader from '../components/Header.vue';
import VueFooter from '../components/footer.vue';

export default {
  components:{
    'VueTable':VueTable,
    'VueHeader':VueHeader,
    'VueFooter':VueFooter
  }
}

</script>

<style>
#main{
	display:inline-block;
  position:absolute;
  padding :0;
  width: 100%;
  height : 50%;
  margin: 0 auto;
  text-align:center;
  
}
</style>

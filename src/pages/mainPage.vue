<template>
  <div>
    <div class="fixedHeader">
      <VueHeader></VueHeader>
    </div>
  <full-page ref="fullpage" :options="options" id="fullpage">
      <div id="main">
        <div class="section">
          <AdVue></AdVue>
        </div>
        <div class="section">
          <KoreanVue></KoreanVue>
        </div>
        <div class="section">
          <AmericaVue></AmericaVue>
        </div>
        <div class="section">
          <ChinaVue></ChinaVue>
        </div>
        <div class="section">
          <JapanVue></JapanVue>
        </div>
        <div class="section">
          <FooterVue></FooterVue>
        </div>
      </div>
    </full-page>
    <div class="fixedUp">
      <VueUp></VueUp>
    </div>
  </div>
</template>
/*  */
<script>
import AdVue from '../components/Ad.vue';
import KoreanVue from '../components/Korea.vue';
import JapanVue from '../components/Japan.vue';
import ChinaVue from '../components/Chinese.vue';
import AmericaVue from '../components/America.vue';
import FooterVue from '../components/footer.vue';
import VueHeader from '../components/Header.vue';
import VueUp from '../components/up.vue';

export default {
  data(){
    return{
      headerFlag : false,
      tableFlag : true,
    }
  },
  components:{
    'AdVue':AdVue,
    'KoreanVue':KoreanVue,
    'JapanVue':JapanVue,
    'ChinaVue':ChinaVue,
    'AmericaVue':AmericaVue,
    'FooterVue':FooterVue,
    'VueHeader':VueHeader,
    'VueUp':VueUp
  }
}

</script>

<style>
#main{
  height:100vh;
}

body{
  margin:0;
  margin-top:-18px;
  overflow-x:hidden;
}

.fixedHeader{
  position:fixed;
  top:0px;
  width:100%;
  z-index:500;
  margin-left:9.5%;
  margin-top:-2%;
}

.fixedUp{
  position:fixed;
  bottom:10px;
  right:10px;
}
</style>
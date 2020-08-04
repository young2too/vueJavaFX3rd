<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
  <div id="main">
      <div class="section">
        <AdVue></AdVue>
      </div>
      <div class="section">
        <KoreanVue></KoreanVue>
      </div>
      <div class="section">
        <JapanVue></JapanVue>
      </div>
      <div class="section">
        <ChinaVue></ChinaVue>
      </div>
      <div class="section">
        <AmericaVue></AmericaVue>
      </div>
      <div class="section">
        <FooterVue></FooterVue>
      </div>
    </div>
  </full-page>
</template>

<script>
import AdVue from '../components/Ad.vue';
import KoreanVue from '../components/Korea.vue';
import JapanVue from '../components/Japan.vue';
import ChinaVue from '../components/Chinese.vue';
import AmericaVue from '../components/America.vue';
import FooterVue from '../components/footer.vue';

export default {
  data(){
    return{
      headerFlag : false,
      tableFlag : true,
      scrollbars : true,

    }
  },
  components:{
    'AdVue':AdVue,
    'KoreanVue':KoreanVue,
    'JapanVue':JapanVue,
    'ChinaVue':ChinaVue,
    'AmericaVue':AmericaVue,
    'FooterVue':FooterVue,
  }
}

</script>

<style>
#main{
  height:100vh;
}

body{
  margin:0;
  padding:0;
  overflow-x:hidden;
}
</style>

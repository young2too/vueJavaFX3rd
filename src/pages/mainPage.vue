<template>
  <div id="main">
    <section>
      <AdVue></AdVue>
    </section>
    <section>
      <KoreanVue></KoreanVue>
    </section>
    <section>
      <JapanVue></JapanVue>
    </section>
    <section>
      <ChinaVue></ChinaVue>
    </section>
    <section>
      <AmericaVue></AmericaVue>
    </section>
  </div>
</template>

<script>
import AdVue from '../components/Ad.vue';
import KoreanVue from '../components/Korea.vue';
import JapanVue from '../components/Japan.vue';
import ChinaVue from '../components/Chinese.vue';
import AmericaVue from '../components/America.vue';

export default {
  data(){
    return{
      headerFlag : false,
      tableFlag : true
    }
  },
  components:{
    'AdVue':AdVue,
    'KoreanVue':KoreanVue,
    'JapanVue':JapanVue,
    'ChinaVue':ChinaVue,
    'AmericaVue':AmericaVue
  }
}

</script>

<style>
#main{
  height:100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
  -ms-scroll-snap-type: mandatory;
}

body{
  margin:0;
  padding:0;
}

#main>section{
  height:100%;
  scroll-snap-align:start;
  -ms-scroll-snap-coordinate:0 0;
}

</style>

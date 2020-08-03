<template>
	<div class="Ad">
		<p>
			<span v-if='dayOfWeek==1'>
				<VueMonday></VueMonday>
			</span>
			<span v-else-if='dayOfWeek==2'>
				<VueTuesday></VueTuesday>
			</span>
			<span v-else-if='dayOfWeek==3'>
				<VueWednesday></VueWednesday>
			</span>
			<span v-else-if='dayOfWeek==4'>
				<VueThursday></VueThursday>
			</span>
			<span v-else-if='dayOfWeek==5'>
				<VueFriday></VueFriday>
			</span>
		</p>
	</div>
</template>


<script>

import VueMonday from'../components/Date/Monday.vue'
import VueTuesday from'../components/Date/Tuesday.vue'
import VueWednesday from'../components/Date/Wednesday.vue'
import VueThursday from'../components/Date/Thursday.vue'
import VueFriday from'../components/Date/Friday.vue'

export default {
	components:{
  		'VueMonday':VueMonday,
  		'VueTuesday':VueTuesday,
  		'VueWednesday':VueWednesday,
  		'VueThursday':VueThursday,
  		'VueFriday':VueFriday,
	},  
	data(){
		return{
		dayOfWeek:(new Date()).getDay()
		}
	},
	methods: {
		rand(){
			this.dayOfWeek=Math.floor(Math.random()*7+1);
		}
	}
}
</script>
<style scoped>
	#ad{
		width:100%;
		height: 100%;
	}
</style>
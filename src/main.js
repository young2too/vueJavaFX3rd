import Vue from 'vue';
import App from './App';
import mainPage from './pages/mainPage';
import VueRouter from 'vue-router';
import timePage from './pages/timePage';
import 'fullpage.js/vendors/scrolloverflow'  
import VueFullPage from 'vue-fullpage.js';


Vue.config.productionTip = false
Vue.use(VueRouter); // router 기능 확장 선언
Vue.use(VueFullPage); //fullpage 기능확장 선언

const routes = [{
    path:'/',
	component:App,
	children:[
		{
			path:'',
			component:mainPage
		},
		{
			path:'time',
			name:'time',
			component:timePage,
			props:true,
		}
	],
}];

// router 객체생성
const router = new VueRouter({
  routes
});

new Vue({
	el: '#app',
	data () { 
    	return{ 
      		options : { 
			navigation: true,
			navigationPosition: 'right',
			}
		}
	},
  	render: h => h(App),
	router
}).$mount('#app')

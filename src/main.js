import Vue from 'vue';
import App from './App';
import mainPage from './pages/mainPage';
import VueRouter from 'vue-router';
import timePage from './pages/timePage';
import resultPage from './pages/resultPage';

Vue.config.productionTip = false

Vue.use(VueRouter); // router 기능 확장 선언
//
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
		},
		{
			path:'resultPage',
			name:'result',
			component:resultPage
		}
	],
}];

// router 객체생성
const router = new VueRouter({
  routes
});

new Vue({
  	el: '#app',
  	render: h => h(App),
	router
}).$mount('#app')

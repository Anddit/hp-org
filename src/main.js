import Vue from 'vue';
import InstantSearch from 'vue-instantsearch';
import App from './App.vue';
import './assets/css/tailwind.css';

Vue.use(InstantSearch);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

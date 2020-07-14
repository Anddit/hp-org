import Vue from 'vue';
import InstantSearch from 'vue-instantsearch';
import App from './App.vue';
import './assets/css/tailwind.css';
// import 'document-register-element/build/document-register-element'

Vue.use(InstantSearch);

Vue.config.productionTip = false;

// import vueCustomElement from 'vue-custom-element'
// Vue.use(vueCustomElement)

new Vue({
  render: h => h(App),
}).$mount('#app');


// Vue.customElement('vue-widget', App)
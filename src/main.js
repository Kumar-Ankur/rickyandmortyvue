import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App/App.vue'
import { store } from './store/store';

export const eventBus = new Vue();
Vue.use(VueResource);

Vue.config.silent = true

const API = 'https://rickandmortyapi.com/api/character/';

Vue.http.options.root = API;

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

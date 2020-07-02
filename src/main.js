import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from '@/router';
import VueProgressiveImage from 'vue-progressive-image';

import './styles/global.scss';

Vue.config.productionTip = false;
Vue.use(VueProgressiveImage);

const prod = process.env.NODE_ENV === 'production';
const shouldSW = 'serviceWorker' in navigator && prod;
if (shouldSW) {
  navigator.serviceWorker.register('/service-worker.js');
}

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');

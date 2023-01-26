import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import mixin from "@/mixin";
import '@/plugins';
import '@/modules';

import '@/assets/scss/main.scss';
import 'swiper/css/swiper.css';

Vue.config.productionTip = false
Vue.mixin(mixin)

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
                
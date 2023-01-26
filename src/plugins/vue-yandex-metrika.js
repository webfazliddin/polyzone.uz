import Vue from 'vue';
import VueYandexMetrika from 'vue-yandex-metrika';
import router from "@/router";

if (process.env.VUE_APP_YANDEX_METRIKA) {
  Vue.use(VueYandexMetrika, {
    id: process.env.VUE_APP_YANDEX_METRIKA,
    router: router, env: process.env.NODE_ENV,
    options: {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    }
  });
}

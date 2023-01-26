import Vue from 'vue'
import Vuex from 'vuex'
import Auth from "@/store/Auth";
import Setting from "@/store/Setting";
import Mod from "@/store/Mod";
import User from "@/store/User";
import ModLike from "@/store/ModLike";
import Subscriber from "@/store/Subscriber";
import Category from '@/store/Category';
import Currency from "@/store/Currency";

import PrivacyPolicy from "@/store/Web/PrivacyPolicy";
import Dialog from "@/store/Web/Dialog";
import Preloader from "@/store/Web/Preloader";
import Notification from "@/store/Web/Notification";
import WebSetting from "@/store/Web/Setting";
import ModFilter from "@/store/Web/ModFilter";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Setting,
    Mod,
    User,
    ModLike,
    Subscriber,
    Category,
    Currency,

    PrivacyPolicy,
    Dialog,
    Preloader,
    Notification,
    WebSetting,
    ModFilter
  }
})

<template>
  <v-app>
    <Preloader />
    <AppBar />
    <v-main>
      <router-view/>
      <Footer/>
      <ProgressWrap/>
      <LoginRegisterDialog/>
    </v-main>
     <Notification />
  </v-app>
</template>

<script>
import AppBar from "@/components/global/AppBar";
import Footer from "@/components/global/Footer";
import ProgressWrap from "@/components/global/ProgressWrap";
import Dialog from "@/components/detal/Dialog";
import LoginRegisterDialog from "@/components/dialog/LoginRegisterDialog";
import Preloader from "@/components/global/Preloader";
import Notification from "@/components/global/Notification";
import {mapActions} from "vuex";

export default {
  name: 'DefaultLayout',
  components: {
    Dialog,
    Preloader,
    ProgressWrap,
    AppBar,
    Footer,
    Notification,
    LoginRegisterDialog
  },
  mounted() {
    this.actionLoading(false);
  },
  methods:{
    ...mapActions({
      actionLoading:"Preloader/actionLoading"
    })
  }
}
</script>

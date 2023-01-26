<template>
  <v-app>
    <AppBar/>
    <router-view/>
    <Footer/>
    <ProgressWrap />
    <Notification />
  </v-app>
</template>

<script>
import AppBar from "@/components/global/AppBar";
import Footer from "@/components/global/Footer";
import ProgressWrap from "@/components/global/ProgressWrap";
import Notification from "@/components/global/Notification";

export default {
  name: 'HomeLayout',
  components: {
    Notification,
    AppBar,
    Footer,
    ProgressWrap
  }
}
</script>

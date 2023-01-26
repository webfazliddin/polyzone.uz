<template>
  <header class="header_area">
    <div class="container">
      <div class="row align-items-stretch">
        <div class="col-xl-5 mb-5 mb-xl-0">
          <div class="header_text">
            <div class="hot_icon anim_top d-none d-sm-block">
              <img src="/assets/images/fire.png" alt="">
            </div>
            <h1 class="title gr_text anim_top mb_25">{{ setting?.header_title ?? 'loading...' }}</h1>
            <div class="desc anim_top">
              <p>{{ setting?.header_title_description ?? 'loading...' }}</p>
            </div>
            <div class="home_button">
              <router-link to="/mod" tag="a" class="primary_button mr_30 anim_top">Browse all</router-link>
              <router-link to="/upload" tag="a" class="outline_button anim_top">
                <span class="icon me-1"><i class="fa fa-cloud-upload"></i></span>
                Upload
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-xl-7">
          <figure class="single_image anim_right h-100 w-100">
            <Mod :src="setting.header_mod"/>
          </figure>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Mod from "@/components/detal/Mod";
import {mapGetters} from "vuex";

export default {
  name: "HeaderSection",
  components: {Mod},
  computed: {
    ...mapGetters({
      setting: "Setting/list"
    })
  }
}
</script>

<style lang="scss" scoped>
figure {
  display: block;

  iframe {
    min-height: 400px;
  }
}

.title {
  font-size: var(--h1-font-size) !important;
  line-height: var(--h1-line-height) !important;
  font-weight: var(--font-weight-bold) !important;
}
</style>

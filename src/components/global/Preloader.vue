<template>
  <div class="preloader" v-if="loading">
    <div class="changeable_logo">
      <span class="nav_logo-image logo_light"><img src="/assets/images/logo-light.png" alt="Gority"></span>
      <span class="nav_logo-image logo_dark"><img src="/assets/images/logo-dark.png" alt="Gority"></span>
    </div>
    <div class="loader">Loading...</div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Preloader",
  computed: {
    ...mapGetters({
      loading:"Preloader/loading"
    })
  }
}
</script>

<template>
  <header class="header_area header_element">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="header_text text-center">
            <div class="hot_icon anim_top">
              <img src="/assets/images/element-2.png" alt="">
            </div>
            <h1 class="title anim_top mb_50">{{title}} <br> {{sub_title}}</h1>
            <router-link tag="a" :to="btn_src" class="gr_button anim_top">
              <span class="icon me-1">
                <i class="far fa-clone"></i>
              </span>
              {{btn_title}}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="element element_1" data-parallax='{"x": -100,"y": 40, "smoothness": 30}'>
      <img src="/assets/images/footer-ball-1.png" alt="">
    </div>
    <div class="element element_2" data-parallax='{"x": 50,"y": -58, "smoothness": 30}'>
      <img src="/assets/images/footer-ball-1.png" alt="">
    </div>
    <div class="element element_3" data-parallax='{"x": -60,"y": 84, "smoothness": 30}'>
      <img src="/assets/images/footer-ball-1.png" alt="">
    </div>
    <div class="element element_4" data-parallax='{"x": -100,"y": 74, "smoothness": 30}'>
      <img src="/assets/images/element-4.png" alt="">
    </div>
    <div class="element element_5" data-parallax='{"x": -60,"y": -100, "smoothness": 30}'>
      <img src="/assets/images/element-5.png" alt="">
    </div>
    <div class="element element_6" data-parallax='{"x": 90,"y": -60, "smoothness": 30}'>
      <img src="/assets/images/element-6.png" alt="">
    </div>
    <div class="element element_7" data-parallax='{"x": -60,"y": 100, "smoothness": 30}'>
      <img src="/assets/images/element-7.png" alt="">
    </div>
    <div class="element element_8" data-parallax='{"x": -90,"y": 120, "smoothness": 30}'>
      <img src="/assets/images/element-8.png" alt="">
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderSecond',
  props: {
    title: {
      default: 'Title'
    },
    sub_title: {
      default: 'Sub title'
    },
    btn_title: {
      default: 'button'
    },
    btn_src: {
      default: '#'
    }
  }
}
</script>
<style scoped>
.header_text .title {
  font-size: var(--h1-font-size) !important;
}
</style>

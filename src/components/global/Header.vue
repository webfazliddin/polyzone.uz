<template>
  <header class="site_header header_element">
    <div class="container">
      <h1 class="page_title">{{title}}</h1>
      <div class="sub_title secondary_text">{{sub_title}}</div>
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
  name: 'Header',
  props: {
    title: {
      default: 'Title'
    },
    sub_title: {
      default: 'Sub title'
    }
  }
}
</script>

<style>
.site_header{
  padding: 60px 0;
}
</style>

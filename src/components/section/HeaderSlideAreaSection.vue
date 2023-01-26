
<template>
  <div class="header_slide_area">
    <div class="swiper-container updown_slider anim_top">
      <Swiper class="swiper swiper-wrapper mb-14" :options="swiperOption">
        <SwiperSlide>
          <div class="slide_image">
            <img src="/assets/images/updown_slide_1.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide_image">
            <img src="/assets/images/updown_slide_2.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide_image">
            <img src="/assets/images/updown_slide_3.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide_image">
            <img src="/assets/images/updown_slide_4.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide_image">
            <img src="/assets/images/updown_slide_5.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide_image">
            <img src="/assets/images/updown_slide_1.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide_image">
            <img src="/assets/images/updown_slide_2.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide_image">
            <img src="/assets/images/updown_slide_3.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide_image">
            <img src="/assets/images/updown_slide_4.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slide_image">
            <img src="/assets/images/updown_slide_5.jpg" alt="">
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'HeaderSlideAreaSection',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 30,
        autoplay: {
          delay: 2000,
        },
        speed: 2000,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 6,
            spaceBetween: 30
          }
        }
      }

    }
  },
}
</script>

<style scoped>
</style>

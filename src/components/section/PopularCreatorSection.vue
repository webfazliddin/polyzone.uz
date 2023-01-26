<template>
  <section class="populer_section overflow_hidden section_padding-top" v-if="userRatingList">
    <div class="container">
      <div class="row align-items-end mb-lg-5 pb-lg-2">
        <div class="col-lg-7 mb-5 mb-lg-0">
          <div class="section_title">
            <div class="title_icon anim_top">
              <img src="/assets/images/element-2.png" alt="">
            </div>
            <h2 class="main_title anim_top">Most Popular Creators <span class="icon"><img src="/assets/images/fire.png" alt=""></span></h2>
          </div>
        </div>
        <div class="col-lg-5 d-flex align-items-center justify-content-lg-end mb-4 mb-lg-0 pb-2 pb-lg-0">
          <a href="explore.html" class="outline_button anim_top">View all Models</a>
          <div class="custom_arrow anim_top populer_arrows">
            <button class="button-prev arrow_control arrow_left"><i class="fas fa-long-arrow-left"></i></button>
            <button class="button-next arrow_control arrow_right"><i class="fas fa-long-arrow-right"></i></button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="swiper-container popule_slider anim_right">
            <Swiper class="swiper-wrapper swiper" :options="swiperOption">
              <SwiperSlide class="swiper-slide" v-for="(user, index) in userRatingList" :key="index">
                <div class="profile_card">
                  <router-link tag="a" :to="'/mod/' + user.mod.id" class="card_image">
                    <ModImage :src='user.mod.img_path'/>
                  </router-link>
                  <div class="card_content">
                    <div class="card_header">
                      <div class="author_photo">
                        <router-link :to="'/user/' +  user.id" tag="a" class="pic">
                          <img :src="user.avatar" alt="">
                        </router-link>
                        <span class="verified"><img src="/assets/images/check-varified.png" alt=""></span>
                      </div>
                    </div>
                    <div class="card_body">
                      <h5 class="card_title">
                        <router-link :to="'/user/' +  user.id" tag="a" >{{user.first_name}} {{user.last_name}}</router-link>
                      </h5>
                      <div class="card_price">
                        <span class="amount">$854.08</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
import {mapActions, mapGetters} from "vuex";
import ModImage from "@/components/detal/ModImage";

export default{
  name: "PopularCreatorSection",
  components: {
    Swiper,
    SwiperSlide,
    ModImage,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev'
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30
          },
        }
      },
    }
  },
  mounted() {
    this.getUserRating();
  },
  computed:{
    ...mapGetters({
      userRatingList: "User/topRatingList"
    }),
  },
  methods: {
    ...mapActions({
      getUserRating: "User/action_index_rating"
    })
  }
}
</script>

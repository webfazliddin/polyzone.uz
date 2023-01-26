<template>
  <section class="populer_section overflow_hidden" v-if="modRatingList">
    <div class="container">
      <div class="row align-items-end mb-lg-5 pb-lg-2">
        <div class="col-lg-7 mb-5 mb-lg-0">
          <div class="section_title">
            <div class="title_icon anim_top">
              <img src="/assets/images/element-2.png" alt=""/>
            </div>
            <h2 class="main_title anim_top">
              Most Popular 3D Models
              <span class="icon"
              ><img src="/assets/images/fire.png" alt=""
              /></span>
            </h2>
          </div>
        </div>
        <div
          class="
            col-lg-5
            d-flex
            align-items-center
            justify-content-lg-end
            mb-4 mb-lg-0
            pb-2 pb-lg-0
          "
        >
          <router-link tag="a" to="/mod" class="outline_button anim_top" >
            View all Models
          </router-link>
          <div class="custom_arrow anim_top populer_arrows">
            <button class="arrow_control arrow_left button-prev">
              <i class="fas fa-long-arrow-left"></i>
            </button>
            <button class="arrow_control arrow_right button-next">
              <i class="fas fa-long-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="swiper-container popule_slider anim_right">
            <Swiper class="swiper swiper-wrapper" :options="swiperOption">
              <SwiperSlide
                class="swiper-slide"
                v-for="(mod, index) in modRatingList"
                :key="index"
              >
                <div class="single_card">
                  <router-link
                    tag="a"
                    :to="'/mod/' + mod.id"
                    class="card_image"
                  >
                    <ModImage :src='mod.img_path'/>
                  </router-link>
                  <div class="card_content">
                    <div class="card_header">
                      <div class="card_author">
                        <router-link
                          :to="'/user/' + mod.user.id"
                          tag="a"
                          class="author_photo"
                        >
                          <img :src="mod.user.avatar" alt="">
                        </router-link>
                        <span class="author_name">
                          <span>Owned By:</span>
                          <router-link
                            :to="'/user/' + mod.user.id"
                            tag="a"
                            class="solid_text"
                          >
                            {{ mod.user.first_name }}
                            {{ mod.user.last_name }}</router-link
                          >
                        </span>
                      </div>
                    </div>
                    <div class="card_body">
                      <h4 class="card_title">
                        <router-link tag="a" :to="'/mod/' + mod.id">
                          {{ mod.title }}
                        </router-link>
                      </h4>
                      <div class="card_date">
                        <span class="solid_text">Relesed:</span>
                        <span> {{ moment(mod.created_at).format("MMMM / Y") }}</span>
                      </div>
                    </div>
                    <div class="card_footer">
                      <div class="price">
                        <span>Price: </span>
                        <b class="primary_text"
                        >{{ !!mod.price ? numeral(mod.price.default_value).format("0,0[.]00") : "FREE" }}
                          {{ mod.price ? "$" : "" }}</b
                        >
                      </div>
                      <div>
                        <Like :id="mod.id"/>
                        <AddToCard :id="mod.id" v-if="!!mod.price" class="ml-3"/>
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
import {mapActions, mapGetters} from "vuex";
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
import Like from "@/components/detal/Like";
import AddToCard from "@/components/detal/AddToCart";
import ModImage from "@/components/detal/ModImage";

export default {
  name: "PopularSection",
  components: {
    AddToCard,
    Like,
    Swiper,
    SwiperSlide,
    ModImage,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        initialSlide: 4,
        loop: true,
        speed: 1000,
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
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
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      },
    };
  },
  mounted() {
    this.getModRating();
  },
  computed: {
    ...mapGetters({
      modRatingList: "Mod/topRatingList",
    }),
  },
  methods: {
    ...mapActions({
      getModRating: "Mod/action_index_rating",
    }),
  },
};
</script>


<style scoped>
</style>

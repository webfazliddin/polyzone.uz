<template>
  <section class="top_collection_section overflow_hidden section_padding">
    <div class="container">
      <div class="row align-items-end mb-lg-5 pb-lg-2">
        <div class="col-md-7 mb-1 mb-md-0">
          <div class="section_title">
            <div class="title_icon anim_top">
              <img src="/assets/images/element-2.png" alt="">
            </div>
            <h2 class="main_title anim_top">Top collections</h2>
          </div>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-md-6 col-lg-4 col-xxl-3" v-for="(user, index) in list" :key="index">
          <div class="author_box_2">
            <div class="num">{{ index + 1 }}</div>
            <div class="author_photo">
              <router-link tag="a" :to="'/user/' + user.id" class="pic">
                <img :src="user.avatar">
              </router-link>
              <span class="verified">
                <img src="/assets/images/check-varified.png">
              </span>
            </div>
            <div class="author_info">
              <h6 class="title">
                <router-link tag="a" :to="'/user/' + user.id">@{{ user.nick_name }}</router-link>
              </h6>
              <small class="d-flex justify-content-between">
                <span class="primary_text">
                  <img src="/assets/images/updown-arrow.png" alt="">
                  <b>0.244wETH</b></span>
                <b>+134.55%</b>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CreatorSection",
  computed: {
    ...mapGetters({
      list: "User/topRatingList"
    })
  },
  mounted() {
    this.actionUserRating(12);
  },
  methods: {
    ...mapActions({
      actionUserRating: "User/action_index_rating"
    })
  }
}
</script>


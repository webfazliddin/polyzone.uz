<template>
  <section class="live_section section_padding-top">
    <div class="container">
      <div class="row mb-5 pb-lg-2">
        <div class="col-lg-12">
          <div class="section_title align-items-center">
            <div class="title_icon anim_top">
              <img src="/assets/images/element-2.png" alt="">
            </div>
            <h2 class="main_title anim_top">Live Auctions <span class="icon"><img src="/assets/images/fire.png" alt=""></span>
            </h2>
          </div>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-md-6 col-xl-4" v-for="(mod, index) in lastList" :key="index">
          <div class="single_card live anim_top">
            <Timer :date="mod.created_at"/>
            <ModImage :src="mod.img_path"/>
            <div class="card_content">
              <div class="card_header">
                <div class="card_author">
                  <router-link tag="a" :to="'/user/' + mod.user.id" class="author_photo">
                    <img :src="mod.user.avatar" alt="">
                  </router-link>
                  <span class="author_name">
                    <router-link tag="a" :to="'/user/' + mod.user.id" class="solid_text">
                      {{ mod.user.first_name + ' ' + mod.user.last_name }}
                    </router-link>
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
                  <span> {{ moment(mod.created_at).format('MMMM / Y') }}</span>
                </div>
              </div>
              <div class="card_footer">
                <b>Most recently added: {{ index + 1 }}</b>
                <Like :id="mod.id" />
              </div>
              <div class="card_price">
                <span>Price</span>
                <b class="primary_text">
                  {{ !!mod.price ? mod.price.default_value + ' $' : 'FREE' }}
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt_50">
        <div class="col-lg-12 text-center">
          <router-link tag="a" to="/mod" class="primary_button anim_top">Explore More</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Timer from "@/components/detal/Timer";
import ModImage from "@/components/detal/ModImage";
import Like from "@/components/detal/Like";

export default {
  name: "LiveSection",
  components: {Like, ModImage, Timer},

  mounted() {
    this.actionLastList();
  },
  computed: {
    ...mapGetters({
      lastList: "Mod/lastList"
    }),
  },
  methods: {
    ...mapActions({
      actionLastList: "Mod/action_index_last"
    })
  }
}
</script>

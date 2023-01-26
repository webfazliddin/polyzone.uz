<template>
  <div class="footer_main">
    <div class="element_1" data-parallax='{"x": 200,"y": 200, "smoothness": 30}'>
      <img src="/assets/images/footer-ball-1.png" alt="">
    </div>
    <div class="element_2" data-parallax='{"x": -60,"y": -60, "smoothness": 30}'>
      <img src="/assets/images/footer-ball-1.png" alt="">
    </div>
    <!--Subscribe-section-start-->
    <section class="subs_section">
      <div class="container">
        <div class="row mb_60">
          <div class="col-lg-12">
            <div class="section_title align-items-center text-center anim_top">
              <div class="title_icon">
                <img src="/assets/images/element-2.png" alt="">
              </div>
              <h2 class="main_title big">{{ setting?.footer_title ?? 'loading ...' }}</h2>
              <div class="desc">
                <p>Subscribe to our community!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8 relative anim_top">
            <form class="subscribe_form" @submit.prevent="apiSubscriber">
              <input type="email" v-model="email" class="mc-input" id="mc-input" name="EMAIL"
                     placeholder="Enter Mail Adress">
              <button :disabled="loading" type="submit" :class="{ 'skeleton-loader': loading }">Subscribe Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!--Subscribe-section-end-->

    <div class="footer_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 pe-xl-5">
            <div class="widget pe-xl-5 anim_top">
              <div class="changeable_logo">
                <span class="nav_logo-image logo_light"><img src="/assets/images/logo-light.png" alt="Gority"></span>
                <span class="nav_logo-image logo_dark"><img src="/assets/images/logo-dark.png" alt="Gority"></span>
              </div>
              <div class="desc mb_40">Polyzone is the best web-site to sell and buy 3D Models around the World. Upload your work and get benefit.
              </div>
              <div class="social_link">
                <a :href="setting?.social_set_youtube ?? '#'" target="_blank"><i class="fab fa-youtube"></i></a>
                <a :href="setting?.social_set_twitter ?? '#'" target="_blank"><i class="fab fa-twitter"></i></a>
                <a :href="setting?.social_set_facebook ?? '#'" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a :href="setting?.social_set_instagram ?? '#'" target="_blank"><i class="fab fa-instagram"></i></a>
                <a :href="setting?.social_set_linkedin ?? '#'" target="_blank"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-4">
                <div class="widget anim_top">
                  <h5 class="widget_title">My Account</h5>
                  <ul v-if="!isAuthenticated" class="nav_link">
                    <li><router-link to="/auth/login">Login</router-link></li>
                    <li><router-link to="/auth/register">Register Now</router-link></li>
                  </ul>
                  <ul v-if="isAuthenticated && user" class="nav_link">
                    <li><router-link :to="'/user/'+user.id">My Profile</router-link></li>
                    <li><router-link to="/auth/setting">Edit Profile</router-link></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="widget anim_top">
                  <h5 class="widget_title">Resources</h5>
                  <ul class="nav_link">
                    <li><router-link to="/home">Home</router-link></li>
                    <li><router-link to="/authors">Authors</router-link></li>
                    <li><router-link to="/mod">Models</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>

                  </ul>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="widget anim_top">
                  <h5 class="widget_title">Contact info</h5>
                  <ul class="contact_info">
                    <li>{{ setting?.contact_geo_address ?? 'loading...' }}</li>
                    <li>{{ setting?.contact_phone ?? 'loading...' }}</li>
                    <li>{{ setting?.contact_email ?? 'loading...' }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright_text anim_top">&copy; 2022 3D Marketplace - <a target="_blank" style="color: #ddd" href="https://oik-group.com">OIK-GROUP</a> | All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Footer',
  data: () => ({
    email: '',
    loading: false,
  }),
  methods: {
    ...mapActions({
      sendEmail: "Subscriber/action_send_email"
    }),
    apiSubscriber() {
      this.loading = true
      this.sendEmail({email: this.email})
        .finally(()=>{
          this.loading = false
        });
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "Auth/authentication",
      user: "Auth/user",
      setting: "Setting/list"
    }),
  }
}
</script>

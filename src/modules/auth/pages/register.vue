<template>
  <main class="full-wrapper" id="home-section">
    <!--Site_Header-Start-->
    <Header
      :title="'Sign up'"
      :sub_title="'Sign up'"
    />
    <!--Site_Header-End-->
    <section class="section_padding section_border_top">
      <div class="container">
        <div class="row g-0 login_bg" style="background-image: url('/assets/images/login-1.jpg');">
          <div class="col-md-8 offset-md-4 col-xl-7 offset-xl-5">
            <div class="login_box_area">
              <RegisterLocal/>
              <router-link to="/auth/login" tag="a" class="text_button mt-4">
                Already have an account? Login
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/global/Header";
import RegisterLocal from "../components/RegisterLocal";
import {mapGetters} from "vuex";

export default {
  name: "Register",
  components: {
    Header,
    RegisterLocal
  },
  computed: {
    ...mapGetters({
      isAuth: 'Auth/authentication'
    })
  },
  watch: {
    isAuth() {
      this.$router.push('/')
    }
  }
}
</script>

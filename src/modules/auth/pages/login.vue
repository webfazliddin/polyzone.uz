<template>
  <main class="full-wrapper" id="home-section">
    <Header
      :title="'Sign up'"
      :sub_title="'Sign up'"
    />
    <!--Site_Header-End-->
    <section class="section_padding section_border_top">
      <div class="container">
        <div class="row g-0 login_bg" style="background-image: url('/assets/images/login-2.jpg');">
          <div class="col-md-8 offset-md-4 col-xl-7 offset-xl-5">
            <div class="login_box_area">
              <LoginLocal />
              <router-link to="/auth/register" tag="a" class="text_button mt-4">Don’t Have an account? Sign up</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

</template>

<script>
import Header from "@/components/global/Header";
import LoginLocal from "../components/LoginLocal";
import checkAuth from "@/middlewares/checkAuth";
import {mapGetters} from "vuex";

export default {
  name: 'Login',
  components: {
    Header,
    LoginLocal
  },
  mounted() {
    if(checkAuth()){
      this.$router.push('/home')
    }
  },
  computed:{
    ...mapGetters({
      isAuth: 'Auth/authentication'
    })
  },
  watch:{
    isAuth(){
      this.$router.push('/')
    }
  }
}
</script>

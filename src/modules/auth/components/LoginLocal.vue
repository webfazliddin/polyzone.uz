<template>
  <div>
    <div class="row mb-4 mb-md-5 lang-row">
      <slot name="close"></slot>
    </div>
    <div class="row mb-4">
      <div class="col-12">
        <h4 class="contact_title mb-0">Login In Your Account</h4>
      </div>
    </div>
    <div class="row g-4 mb-2">
<!--      <div class="col-lg-6">-->
        <a href="/back/social/google/auth/redirect" class="normal_button">
          <span class="icon"><img src="/assets/images/google-icon.png" alt=""></span>
          <span class="text">Continue with Google</span>
        </a>
<!--      </div>-->
<!--      <div class="col-lg-6">-->
<!--        <button class="normal_button">-->
<!--          <span class="icon"><img src="/assets/images/facebook-icon.png" alt=""></span>-->
<!--          <span class="text">Continue with Facebook</span>-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="row my-4 my-lg-5">-->
<!--      <div class="col-12">-->
<!--        <div class="or-separetor text-center">- OR -</div>-->
<!--      </div>-->
    </div>
    <form class="login_form mt-5" @submit.prevent="apiLogin">
      <div class="form-box">
        <input type="text" class="input_control" placeholder="Email Address" v-model="nick_name">
      </div>
      <div class="form-box">
        <input type="password" class="input_control" placeholder="Password" v-model="password">
      </div>
      <button type="submit" class="gr_button full">Login Account</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "LoginLocal",
  data() {
    return {
      nick_name: "",
      password: ""
    }
  },
  methods: {
    ...mapActions({
      login: "Auth/login"
    }),
    apiLogin() {
      this.login({nick_name: this.nick_name, password: this.password})
    },
  },
}
</script>

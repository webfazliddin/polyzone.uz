<template>
  <div>
    <div class="row mb-4">
      <div class="col-12">
        <h4 class="contact_title mb-0">Create Your Account </h4>
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
    <form class="login_form mt-5" @submit.prevent="apiRegister">
      <div class="row">
        <div class="col-lg-6">
          <div class="form-box">
            <input v-model="first_name" type="text" name="form-name" class="input_control" placeholder="First Name">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-box">
            <input v-model="last_name" type="text" name="form-name" class="input_control" placeholder="Last Name">
          </div>
        </div>
      </div>
      <div class="form-box">
        <input v-model="nick_name" type="text" name="form-name" class="input_control" placeholder="Nik Name">
      </div>
      <div class="form-box">
        <input v-model="email" type="email" name="form-email" class="input_control" placeholder="Email Address">
      </div>
      <div class="form-box">
        <input v-model="password" type="password" name="form-pass" class="input_control" placeholder="Password">
      </div>
      <div class="form-box">
        <input v-model="password_confirmation" type="password" name="form-pass" class="input_control"
               placeholder="Password Confirmation">
      </div>
      <div>
        <div
          class="author_photo m-1"
          v-for="(item, index) in listAvatar"
          :key="index"
          :class="{selected:avatar === item.path}"
          @click="avatar = item.path"
        >
          <img :src="item.url" alt="">
        </div>
      </div>
      <button type="submit" class="gr_button full">Create Account</button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "RegisterLocal",
  data() {
    return {
      first_name: '',
      last_name: '',
      nick_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      avatar: '',
    };
  },
  computed: {
    ...mapGetters({
      listAvatar: "Setting/listAvatar"
    })
  },
  mounted() {
    if (!this.listAvatar.length) {
      this.actionIndexAvatar();
    }
  },
  methods: {
    ...mapActions({
      register: "Auth/register",
      actionIndexAvatar: "Setting/action_index_avatar"
    }),
    apiRegister() {
      this.register({
        first_name: this.first_name,
        last_name: this.last_name,
        nick_name: this.nick_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        avatar: this.avatar
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.author_photo {
  display: inline-block;
  width: 50px;

  &:hover, &.selected {
    outline: solid rgb(var(--secondary-color)) 3px;
    border-radius: 50%;
  }
}
</style>

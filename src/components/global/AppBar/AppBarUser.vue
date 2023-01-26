<template>
  <div class="relative user_cirlce">
    <button class="circle-button">
      <img v-if="user" :src="user.avatar" alt="" >
      <i v-if="!user" class="fas fa-user"></i>
    </button>
    <div v-if="user"  class="user_mini_cart">
      <h6 class="title">{{ user.first_name }} {{ user.last_name }}</h6>
      <div class="desc">1200 ETH</div>
      <hr>
      <ul class="icon_list">
        <li>
          <router-link tag="a" :to="'/user/' + user.id">
            <span class="icon"><i class="far fa-user"></i></span>
            <span class="text">My Profile</span>
          </router-link>
        </li>
        <li>
          <router-link tag="a" :to="'/auth/setting'" >
            <span class="icon"><i class="far fa-pencil"></i></span>
            <span class="text">Edit Profile</span>
          </router-link>
        </li>
        <li>
          <a @click="logout">
            <span class="icon"><i class="far fa-sign-out"></i></span>
            <span class="text">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
    <div v-if="!user"  class="user_mini_cart">
      <ul class="icon_list">
        <li>
          <router-link tag="a" :to="'/auth/register'">
            <span class="icon"><i class="far fa-user"></i></span>
            <span class="text">Register</span>
          </router-link>
        </li>
        <li>
          <router-link tag="a" :to="'/auth/login'">
            <span class="icon"><i class="far fa-pencil"></i></span>
            <span class="text">Login</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AppBarUser",
  computed: {
    ...mapGetters({
      user: "Auth/user",
    })
  },
  methods:{
    ...mapActions({
      logout:"Auth/logout"
    })
  }
}
</script>

<style lang="scss" scoped >
.circle-button img{
  vertical-align: baseline;
}
</style>

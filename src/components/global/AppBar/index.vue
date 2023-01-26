<template>
  <div>
    <!--  <v-app-bar app>-->
    <div class="navbar_height"></div>
    <!-- nav_area-Start -->
    <div class="nav_area" data-spy="affix" data-offset-top="197">
      <div class="container nav_row">
        <!-- nav_logo-Start -->
        <div class="nav_logo">
          <!-- Text-Logo-Markup -->
          <!--<h2 class="nav_logo-text"><a href="javascript:void(0)">Gority</a></h2>-->
          <!-- Image-Logo-Markup -->
          <router-link to="/home" tag="a" class="nav_logo-image logo_light">
            <img src="/assets/images/logo-light.png" alt="Gority"/>
          </router-link>
          <router-link to="/home" tag="a" class="nav_logo-image logo_dark">
            <img src="/assets/images/logo-dark.png" alt="Gority"/>
          </router-link>
        </div>
        <!--nav_logo-End-->
        <div class="nav_toggle circle-button" id="nav-toggle">
          <i class="fal fa-bars"></i>
        </div>
        <div class="nav_right" id="nav-right">
          <div class="nav_close" id="nav-close">
            <i class="fal fa-times"></i>
          </div>
          <!-- nav_menu-Start -->
          <nav class="nav_menu" id="nav-menu">
            <ul class="nav">
              <li>
                <router-link tag="a" to="/home" active-class="nav_active">Home</router-link>
              </li>
              <!--              <li>-->
              <!--                <router-link tag="a" to="/about" active-class="nav_active">About us</router-link>-->
              <!--              </li>-->
              <li>
                <router-link tag="a" to="/authors" active-class="nav_active">Authors</router-link>
              </li>
              <li>
                <router-link tag="a" to="/mod" @click.native="categoryClear()" active-class="nav_active">Models
                </router-link>
                <ul class="sub-menu">
                  <li v-for="(category, index) in navbarCategories" :key="index">
                    <router-link
                      tag="a"
                      :to="{name:'ModPage'}"
                      @click.native="categorySync([category.id])"
                    >
                      {{ category.title }}
                    </router-link>
                    <ul v-if="category.children_has" class="sub-menu">
                      <li v-for="(category_2, index_2) in category.children" :key="index_2">
                        <router-link
                          tag="a"
                          :to="{name:'ModPage'}"
                          @click.native="categorySync([category_2.id])"
                        >
                          {{ category_2.title }}
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <router-link tag="a" to="/contact" active-class="nav_active">Contact</router-link>
              </li>
            </ul>
          </nav>
          <!-- nav_menu-End -->
          <NavSearch />
          <router-link tag="button" :to="'/upload'" class="fa fa-upload change-theme circle-button"></router-link>
          <AppBarShoppingCart/>
          <!-- Theme change button -->
          <button
            class="fa-moon fas change-theme circle-button"
            id="theme-button"
            @click="$vuetify.theme.dark = !$vuetify.theme.dark"
          ></button>
          <AppBarUser/>
        </div>
      </div>
    </div>
    <!-- nav_area-End -->
    <!--  </v-app-bar>-->
  </div>
</template>

<script>
import AppBarUser from "@/components/global/AppBar/AppBarUser";
import AppBarShoppingCart from "@/components/global/AppBar/AppBarShoppingCart";
import {mapActions, mapGetters, mapMutations} from "vuex";
import NavSearch from "@/components/global/AppBar/NavSearch";

export default {
  name: "AppBar",
  components: {NavSearch, AppBarShoppingCart, AppBarUser},
  mounted() {
    if (!this.navbarCategories.length) {
      this.actionGetNavbarCategories();
    }
  },
  computed: {
    ...mapGetters({
      navbarCategories: "Category/listForNavbar"
    })
  },
  methods: {
    ...mapActions({
      actionGetNavbarCategories: "Category/action_index_for_navbar"
    }),
    ...mapMutations({
      categorySync: "ModFilter/categoriesSync",
      categoryClear: "ModFilter/categoriesClear"
    }),
  },
}
;
</script>

<style lang="scss" scoped>
.nav_active {
  color: rgba(var(--heading-color), 1) !important;

  &::before {
    content: url("@/assets/images/star.png");
    margin-right: 5px;
  }
}
</style>



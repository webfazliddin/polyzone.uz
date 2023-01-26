<template>
  <main class="full-wrapper" id="home-section">
    <Header :title="'Models'" :sub_title="'Home : Models'"/>
    <div class="page_models">
      <div class="container" id="scroll" :class="{scroll:isScroll}" :style="{top:scrollY}">
        <div class="sort_header_card">
          <div class="row align-items-center mb-2">
            <div class="col-sm-4 text-center text-sm-start">
              <form class="search-form" @submit.prevent>
                <input
                  v-model="searchData"
                  type="text"
                  placeholder="Search keyword"
                  class="input_control"
                >
                <button @click="updateSearch" type="submit"><i class="fal fa-search"></i></button>
              </form>
            </div>
            <div class="col-sm-8 text-center text-sm-end mt-3 mt-sm-0">
              <div class="sort_actions">
                <v-combobox
                  :items='sizes'
                  v-model="meta.size"
                  outlined
                  height="54"
                  dense
                  class="d-inline-flex w-25 mr-1 m-1"
                  hide-details
                >
                </v-combobox>
                <v-btn
                  @click="isMini = !isMini"
                  height="54"
                  outlined
                  class="mini mr-1"
                >
                  <i class="fas" :class="{'fa-line-height':isMini, 'fa-list':!isMini}"></i>
                </v-btn>
                <v-select
                  :items="sortByList"
                  v-model="sortBy"
                  item-value="value"
                  item-text="title"
                  label="Standard"
                  solo
                  outlined
                  class="d-inline-flex w-25"
                  dense
                  height="54"
                  filled
                  background-color="#00000000"
                  hide-details
                ></v-select>
              </div>
            </div>
          </div>
          <ModPagination
            :page="meta.page"
            :total-page="meta.total_page"
            @setPage="setPage"
          />
        </div>
      </div>
      <div class="container" v-if="isScroll" :style="{height:scrollHeight + 'px'}"></div>
      <div class="container">
        <div class="row flex-row-reverse g-4 mt-0">
          <div class="col-lg-8">
            <div class="row g-4">
              <div class="col-md-6" v-for="(mod, index) in list" :key="index" v-if="isMini">
                <div class="single_card">
                  <router-link
                    :to="'/mod/' + mod.id"
                    tag="a"
                    class="card_image m-0"
                  >
                    <ModImage :src='mod.img_path'/>
                  </router-link>
                  <div
                    :class="{
                      content_card_light: !$vuetify.theme.dark,
                      content_card_dark: $vuetify.theme.dark,
                    }"
                  >
                    <div class="card_author mb-0">
                      <router-link :to="'/user/' + mod.user.id" tag="a" class="author_photo">
                        <img :src="mod.user.avatar" alt="">
                      </router-link>
                      <span>
                        <router-link :to="'/user/' + mod.user.id" tag="a" class="solid_text">
                          {{ mod.user.nick_name }}
                        </router-link>
                        <br>
                        <router-link :to="'/mod/' + mod.id" tag="a" class="solid_text">
                          {{ mod.title }}
                        </router-link>
                      </span>
                    </div>
                    <div>
                      <div class="text-right">
                        <Like :id="mod.id"/>
                        <Viewed :id="mod.id" class="ml-2"/>
                      </div>
                      <div class="text-right">
                        <b class="primary_text">
                          {{ mod.price ? numeral(mod.price.default_value).format('0,0[.]00') + "$" : "FREE" }}
                        </b>
                        <AddToCard :id="mod.id" class="ml-2"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6" v-for="(mod, index) in list" :key="index" v-if="!isMini">
                <div class="single_card">
                  <router-link tag="a" :to="'/mod/' + mod.id" class="card_image m-0">
                    <ModImage :src='mod.img_path'/>
                  </router-link>
                  <div class="card_content">
                    <div class="card_header">
                      <div class="card_author">
                        <router-link :to="'/user/' + mod.user.id" tag="a" class="author_photo">
                          <img :src="mod.user.avatar" alt="">
                        </router-link>
                        <span class="author_name">
                          <span>Owned By:</span>
                          <router-link :to="'/user/' + mod.user.id" tag="a" class="solid_text">
                            {{ mod.user.first_name }} {{ mod.user.last_name }}
                          </router-link>
                        </span>
                      </div>
                    </div>
                    <div class="card_body">
                      <h4 class="card_title">
                        <router-link tag="a" :to="'/mod/' + mod.id">{{ mod.title }}</router-link>
                      </h4>
                      <div class="card_date">
                        <span class="solid_text">Relesed:</span>
                        <span> {{ moment(mod.created_at).format('MMMM/Y') }}</span>
                      </div>
                    </div>
                    <div class="card_footer">
                      <div class="price">
                        <span>Price: </span>
                        <b class="primary_text">
                          {{ mod.price ? numeral(mod.price.default_value).format('0,0[.]00') + "$" : "FREE" }}
                        </b>
                      </div>
                      <div>
                        <Like :id="mod.id"/>
                        <AddToCard :id="mod.id" class="ml-2"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <aside class="sidebar_main">
              <ModFilterCategory/>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/global/Header";
import Like from "@/components/detal/Like";
import ModImage from "@/components/detal/ModImage";
import {mapActions, mapGetters, mapMutations} from "vuex";
import ModFilterCategory from "@/components/local/mod/ModFilterCategory";
import AddToCard from "@/components/detal/AddToCart";
import Viewed from "@/components/detal/Viewed";
import ModPagination from "@/components/local/mod/ModPagination";

export default {
  name: "page-models",
  components: {
    ModPagination,
    Viewed,
    AddToCard,
    ModFilterCategory,
    Header,
    Like,
    ModImage,
  },
  data() {
    return {
      isMini: true,
      sortByShow: false,
      sortBy: 'time',
      sortByList: [
        {title: 'By Time', value: 'time'},
        {title: 'By rating', value: 'rating'},
      ],
      meta: {
        page: 1,
        size: 10,
        total_page: 1,
        total: 0,
      },
      isScroll: false,
      scrollY: 5000,
      scrollHeight: 0,
      sizes: [
        10,
        25,
        50
      ],
      searchData: '',
    };
  },
  computed: {
    ...mapGetters({
      list: "Mod/list",
      categories: "ModFilter/categories",
      search: "ModFilter/search"
    }),
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.searchData = this.search;
    this.refresh();
  },
  updated() {
    if (!this.isScroll) {
      this.scrollY = document.querySelector("#scroll").offsetTop;
      this.scrollHeight = document.querySelector("#scroll").scrollHeight;
    }
  },
  methods: {
    ...mapActions({
      getList: "Mod/action_index",
    }),
    ...mapMutations({
      modFilterCategoriesAdd: "ModFilter/categoriesAdd",
      modFilterCategoriesClear: "ModFilter/categoriesClear",
      modFilterSearchSync: "ModFilter/searchSync"
    }),
    refresh() {
      let params = {size: this.meta.size, page: this.meta.page, sort: this.sortBy, categories: this.categories};
      if (!!this.search) {
        params['search'] = this.search;
      }
      this.getList(params)
        .then(response => {
          let {total, total_page} = response.data.meta;
          this.meta.total = total;
          this.meta.total_page = total_page;
        })
    },
    handleScroll(event) {
      this.isScroll = window.top.scrollY > this.scrollY;
    },
    setPage(page) {
      this.meta.page = page
    },
    updateSearch(){
      this.modFilterSearchSync(this.searchData);
    }
  },
  watch: {
    sortBy() {
      this.refresh();
    },
    categories() {
      this.refresh();
    },
    'meta.page'() {
      this.refresh();
    },
    'meta.size'() {
      this.refresh();
    },
    search() {
      this.refresh();
    }
  },
};
</script>

<style scoped lang='scss'>
.page_models {
  padding: 110px 0;
  border-top: 1px solid transparent;
  border-image: url(@/assets/images/comment-bottom-line.png) 100 stretch;

  .remove__padding {
    padding-bottom: 0;
  }

  .sortByType {
    display: inline;
    position: relative;

    div {
      border: 1px solid rgb(54, 54, 54);
      border-top: none;
      background: rgb(40, 40, 40);
      border-radius: 7px;
      padding: 5px;
      text-align: start;
      position: absolute;
      z-index: 1;
      width: 120%;
      top: 25px;
      right: -5px;

      ul {
        .active {
          color: #feda03;
        }

        li {
          color: rgb(135, 135, 135);
          transition: color 0.4s ease;
          letter-spacing: 0.02rem;
          display: flex;
          align-items: center;

          &:hover {
            color: #fff;
            cursor: pointer;

            i {
              color: #feda03;
            }
          }
        }
      ;
        list-style-type: none;
        margin: 0;
        padding: 0;

        i {
          margin: 0 5px 0 5px;
          font-size: 10px;
        }
      }

    }
  }

  .single_card {
    overflow: hidden;
    cursor: pointer;

    span {
      transition: all 0.2s linear;
      font-weight: 500;

      &:hover {
        color: rgb(var(--primary-color));
      }
    }

    button {
      &:hover {
        i {
          color: #feda03;
        }
      }
    }

    .content_card_dark {
      position: absolute;
      width: 100%;
      padding: 8px 15px;
      bottom: 0;
      background-color: rgba(161, 161, 161, 0.8);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .content_card_light {
      position: absolute;
      width: 100%;
      padding: 8px 15px;
      bottom: 0;
      background-color: rgba(228, 226, 226, 1);
      color: rgba(12, 12, 12, 1);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

.scroll {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  top: 100px;
}

.mini {
  margin-top: -4px;
  //border-radius: 7px;
  border: 1px solid rgb(var(--gray-alt-bg));
}

@media screen and (max-width: 767px) {
  .sortByType {
    margin-left: 10px;
  }
}
</style>

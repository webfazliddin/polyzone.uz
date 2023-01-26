<template>
  <main class="full-wrapper" id="home-section">
    <Header :title="'Authors'" :sub_title="'Home : Authors'"/>
    <div class="authors">
      <div class="container ">
        <div class="sort_header_card">
          <div class="row align-items-center">
            <div class="col-lg-4 mb-3 mb-lg-0">
              <form class="search-form" @click.prevent>
                <input type="text" placeholder="Search keyword" class="input_control" autocomplete="off"
                       v-model="search">
                <button type="submit" @click="refresh"><i class="fal fa-search"></i></button>
              </form>
            </div>
            <div class="col-lg-8 text-lg-end">
              <div id="filter_by_duration" class="sort_actions">
                <div class="dropdown">
                  <v-combobox
                    :items='sizeItems'
                    v-model="size"
                    outlined
                    placeholder="Select size"
                    item-color="#333"
                    color="#878787"
                    type="number"
                    hide-spin-buttons
                    height="54"
                    dark
                    dense
                    hide-details
                    class="combobox"
                    style="margin-bottom: -4px"
                  >
                  </v-combobox>
                </div>
                <DropdownSelect
                  :items="categories"
                  :value.sync="category_id"
                  text-key="title"
                  value-key="id"
                  placeholder="All categories"
                />
              </div>

            </div>
          </div>
          <ModPagination
            class="mt-3"
            :totalPage="total_page"
            :page="page"
            @setPage="setPage"
          />
        </div>
        <div class="row mt-0 g-5">
          <div class="col-lg-4 col-md-6" v-for="(author, index) in authorsLists" :key="index">
            <div class="profile_card">
              <router-link :to="'/mod/' + author.mod.id" tag="a" class="card_image">
                <ModImage :src='author.mod.img_path'/>
              </router-link>
              <div class="card_content">
                <div class="card_header">
                  <div class="author_photo">
                    <router-link :to="'/user/' + author.id" class="pic">
                      <img :src="author.avatar"/>
                    </router-link>
                    <span class="verified"><img src="/assets/images/check-varified.png" alt=""></span>
                  </div>
                </div>
                <div class="card_body">
                  <h5 class="card_title">
                    <router-link :to="'/user/' + author.id">{{ author.first_name }} {{ author.last_name }}</router-link>
                  </h5>
                  <div class="card_price">
                    <span class="mail">{{ author.nick_name }}</span>
                  </div>
                </div>
              </div>
              <div class="card_footer">
                <div class="text-start">
                  <h5 class="card_footer_title">{{ author.rating }}</h5>
                  <span>Follower</span>
                </div>
                <a href="#" class="outline_button">Follow</a>
                <div class="icon_button_list justify-content-md-end">
                  <li class="dropdown_menu">
                    <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Options"><i
                      class="fas fa-ellipsis-v"></i></a>
                    <div class="dropdown_content">
                      <ul class="dropdown-menu-list pl-0">
                        <li>
                          <v-btn
                            class="mb-1"
                            @click="userUpdateRole(author.id,'admin')"
                          >
                            Admin
                          </v-btn>
                          <v-btn
                            class="mb-1"
                            @click="userUpdateRole(author.id,'designer')"
                          >
                            Designer
                          </v-btn>
                          <v-btn
                            class="mb-1"
                            @click="userUpdateRole(author.id,'buyer')"
                          >
                            Buyer
                          </v-btn>
                          <v-btn
                            class="mb-1"
                            @click="userUpdateRole(author.id,'excluded')"
                          >
                            Block user
                          </v-btn>
                          <v-btn
                            @click="userDelete(author.id)"
                          >
                            Delete
                          </v-btn>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/global/Header";
import {mapActions, mapGetters} from "vuex";
import ModImage from "@/components/detal/ModImage";
import {API_USER_DESTROY, API_USER_ROLE_UPDATE} from "@/api/User";
import ModPagination from "@/components/local/mod/ModPagination";
import DropdownSelect from "@/components/detal/DropdownSelect";

export default {
  name: "AuthorsPage",
  components: {
    DropdownSelect,
    ModPagination,
    ModImage,
    Header,
  },
  data() {
    return {
      sizeItems: [
        10,
        20,
        30,
        40,
      ],
      size: 10,
      page: 1,
      total_page: 1,
      category_id: null,
      search: ''
    }
  },
  mounted() {
    this.refresh();
  },
  computed: {
    ...mapGetters({
      authorsLists: "User/list",
      categories: "Category/listForNavbar"
    }),
  },
  methods: {
    ...mapActions({
      getAuthors: "User/action_index"
    }),
    userUpdateRole(id, role) {
      API_USER_ROLE_UPDATE(id, {role})
    },
    userDelete(id) {
      API_USER_DESTROY(id)
        .then(() => {
          this.$forceUpdate();
        });
    },
    refresh() {
      let params = {
        size: this.size,
        page: this.page,
        categories: [this.category_id]
      };
      if (!!this.search) {
        params['search'] = this.search;
      }
      this.getAuthors(params).then(response => {
        let {total_page} = response.data.meta;
        this.total_page = total_page;
      })
    },
    setPage(page) {
      this.page = page;
    }
  },
  watch: {
    page() {
      this.refresh();
    },
    size() {
      this.refresh();
    },
    category_id() {
      this.refresh();
    }
  }
};
</script>

<style scoped>
.authors {
  width: 100%;
  padding: 100px 0;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.dropdown_content {
  right: auto;
  left: 0;
  top: auto;
  bottom: 100%;
}
</style>

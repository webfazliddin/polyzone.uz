<template>
  <div>
    <Header
      title="Model"
      sub_title="Sub title"
    />
    <div class="section_padding section_border_top">
      <div class="container" v-if="!!mod">
        <div class="row g-5">
          <div class="col-lg-7">
            <figure class="single_image">
              <Timer :date="mod.created_at"/>
              <img src="/assets/images/single-item-image.jpg" alt="" v-if="!mod">
              <Mod :src="mod.mod_file.public_path" v-else/>
            </figure>
          </div>
          <div class="col-lg-5">
            <div class="item-details">
              <div class="row mb-4">
                <div class="col-sm-7">
                  <div class="card_author">
                    <router-link tag="a" :to="'/user/' + mod.user.id" class="author_photo">
                      <img :src="mod.user.avatar" alt="">
                    </router-link>
                    <span class="author_name">
                      <router-link tag="a" :to="'/user/' + mod.user.id" class="solid_text">{{
                          mod.user.first_name
                        }} {{ mod.user.last_name }}</router-link>
                    </span>
                  </div>
                </div>
                <div class="col-sm-5">
                  <ul class="icon_button_list justify-content-md-end">
                    <li class="dropdown_menu">
                      <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Share"><i
                        class="fas fa-share-alt"></i></a>
                      <div class="dropdown_content">
                        <div class="social-share-menu">
                          <a href="#"><i class="fab fa-facebook-f"></i></a>
                          <a href="#"><i class="fab fa-instagram"></i></a>
                          <a href="#"><i class="fab fa-twitter"></i></a>
                          <a href="#"><i class="fab fa-pinterest-p"></i></a>
                        </div>
                      </div>
                    </li>
                    <li class="dropdown_menu" v-if="authIsAdmin">
                      <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Options"><i
                        class="fas fa-ellipsis-v"></i></a>
                      <div class="dropdown_content">
                        <ul class="dropdown-menu-list pl-0">
                          <li>
                            <v-btn
                              :loading="loading.header_mod"
                              :disabled="loading.header_mod"
                              @click="setAsHeaderMod"
                            >
                              Global Mod
                            </v-btn>
                          </li>
                          <li class="text-center" >
                            <v-btn
                              :loading="loading.header_mod"
                              :disabled="loading.header_mod"
                              @click="deleteMod"
                              class="mt-1"
                            >
                              Delete
                            </v-btn>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="d-flex flex-wrap w-100 justify-content-between align-items-center">
                <h5>{{ this.mod.title }}</h5>
                <h6 class="sm_title">Highest bid 1/20 <img src="/assets/images/fire-sm.png" alt="" class="me-3"></h6>
              </div>
              <div class="current_price">
                <div class="sm_title mb-2">Current price</div>
                <div class="d-flex">
                  <span class="icon me-2"><img src="/assets/images/rank-arrow.png" alt=""></span>
                  <h6 class="primary_text">{{ mod.price ? mod.price.default_value + ' $' : 'FREE' }}</h6>
                </div>
              </div>
              <div class="item_desc mt-4">
                <div class="title">
                  <h6 class="sm_title">Description</h6>
                  <ul class="meta_icon">
                    <li>
                      <Like :id="mod.id" :size="20"/>
                    </li>
                    <li>
                      <Viewed :id="mod.id"/>
                    </li>
                    <li>
                      <AddToCard :id="mod.id"/>
                    </li>
                  </ul>
                </div>
                <div class="desc mt-4">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s</p>
                </div>
              </div>
              <div class="row g-4 mt-2" v-if="!!mod.price">
                <div class="col-sm-6">
                  <v-btn class="w-100 h-100" color="warning" :outlined="!buyed()" @click="shoppingCartAddOrRemove"><span
                    class="icon"><i class="far fa-shopping-basket"></i></span>Place A Bid
                  </v-btn>
                </div>
                <div class="col-sm-6">
                  <button class="gr_button sq_button w-100"><span
                    class="icon"><i class="far fa-shopping-bag"></i></span>Buy Now
                  </button>
                </div>
              </div>
              <div class="row g-4 mt-2" v-if="!mod.price">
                <div class="col-sm-12">
                  <button class="gr_button sq_button w-100" @click="download">
                    <span class="icon">
                      <i class="far fa-download"></i>
                    </span>
                    Download
                  </button>
                </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="placeDilog" role="dialog">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content modal_card">
                    <div class="modal_header">
                      <h4>Place a Bid</h4>
                      <div class="desc">Rasalina are about to place a bid for add by Hilexxa</div>
                      <button type="button" class="close" data-dismiss="modal"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="modal_body">
                      <div class="input_control_group mb-5">
                        <label for="bid4" class="label">Your Bid</label>
                        <div class="group_input">
                          <div class="input_text"><span class="icon"><img src="/assets/images/rank-arrow.png"
                                                                          alt=""></span>ETH
                          </div>
                          <input type="text" id="bid4" class="box_control" placeholder="134/6765"/>
                          <div class="input_text">$15.455.34.00</div>
                        </div>
                      </div>
                      <label class="checkbox_input">
                        <input type="checkbox" id="agree_ch" class="d-none">
                        <span class="label">By checking this box, I agree to Raritex Terms of Service</span>
                      </label>
                    </div>
                    <div class="modal_footer">
                      <button class="gr_button sq_button w-100" type="submit">Place a Bid</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal fade" id="buyDilog" role="dialog">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content modal_card">
                    <div class="modal_header">
                      <h4>Checkout</h4>
                      <div class="desc">You are about to purchase Rasalina from Hilexxa</div>
                      <button type="button" class="close" data-dismiss="modal"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="modal_body">
                      <div class="input_control_group mb-5">
                        <label for="bid3" class="label">Your Bid</label>
                        <div class="group_input">
                          <div class="input_text"><span class="icon"><img src="/assets/images/rank-arrow.png"
                                                                          alt=""></span>ETH
                          </div>
                          <input type="text" id="bid3" class="box_control" placeholder="134/6765"/>
                          <div class="input_text">$15.455.34.00</div>
                        </div>
                      </div>
                      <div class="row mb-2">
                        <div class="col-6">Your balance</div>
                        <div class="col-6 text-end">45.6677ETH</div>
                      </div>
                      <div class="row mb-2">
                        <div class="col-6">Service fee</div>
                        <div class="col-6 text-end">23ETH</div>
                      </div>
                      <div class="row">
                        <div class="col-6">Rasalina will pay</div>
                        <div class="col-6 text-end">34 ETH</div>
                      </div>
                    </div>
                    <div class="modal_footer">
                      <div class="row">
                        <div class="col-sm-6">
                          <button class="gr_button sq_button w-100" type="submit">I Understand, Continue</button>
                        </div>
                        <div class="col-sm-6">
                          <button class="outline_button sq_button w-100" type="submit">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/global/Header";
import {mapActions, mapGetters} from "vuex";
import Mod from "@/components/detal/Mod";
import Timer from "@/components/detal/Timer";
import Like from "@/components/detal/Like";
import AddToCard from "@/components/detal/AddToCart";
import Viewed from "@/components/detal/Viewed";
import {API_MOD_FILE_DOWNLOAD} from "@/api/ModFile";
import {API_MOD_DESTROY} from "@/api/Mod";

export default {
  name: "id",
  components: {
    Viewed,
    AddToCard,
    Like,
    Mod,
    Header,
    Timer
  },
  data() {
    return {
      id: Number(this.$route.params.id),
      mod: null,
      loading: {
        header_mod: false
      }
    }
  },
  mounted() {
    if (!this.mod) {
      this.getMod(this.id)
        .then((response) => {
          if(response.status === 404){
            this.$router.push('/404');
          }
          this.mod = this.listById[this.id] ?? null;
        });
    }
  },
  computed: {
    ...mapGetters({
      listById: "Mod/listById",
      shopping_cart: "WebSetting/shopping_cart",
      authIsAdmin: "Auth/isAdmin"
    }),
  },
  methods: {
    ...mapActions({
      getMod: "Mod/action_show",
      setSetting: "Setting/action_update",
      shoppingCartAdd: "WebSetting/action_shopping_cart_add",
      shoppingCartRemove: "WebSetting/action_shopping_cart_remove"
    }),
    setAsHeaderMod() {
      this.loading.header_mod = true;
      this.setSetting({title: "header_mod", data: this.mod.mod_file.public_path})
        .finally(() => {
          this.loading.header_mod = false;
        })
    },
    buyed() {
      return this.shopping_cart.includes(this.id)
    },
    shoppingCartAddOrRemove() {
      if (this.buyed()) {
        this.shoppingCartRemove(this.id)
      } else {
        this.shoppingCartAdd(this.id)
      }
      this.$forceUpdate();
    },
    download() {
      API_MOD_FILE_DOWNLOAD(this.mod.mod_file.id, this.mod.title + '.' + this.mod.mod_file.mime, this.mod.mod_file.mime);
    },
    deleteMod() {
      API_MOD_DESTROY(this.id)
        .then(() => {
          this.$router.back();
        });
    },
  }
}

</script>

<style lang="scss" scoped>
.single_image {
  height: 500px;
  width: 100%;
}
</style>

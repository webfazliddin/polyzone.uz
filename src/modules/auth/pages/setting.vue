<template>
  <main class="full-wrapper" id="home-section">
    <Header :title="'Author Setting'" :sub_title="user.first_name + ' ' + user.last_name"/>
    <!--Site_Header-End-->
    <section class="section_padding section_border_top">
      <div class="container">
        <div class="row g-4 ">
          <div class="col-lg-12">
            <ul class="tab_buttons justify-content-center">
              <li class="active"><a data-toggle="tab" href="#menu1">Profile Settings</a></li>
              <li><a data-toggle="tab" href="#menu2">Avatar</a></li>
<!--              <li><a data-toggle="tab" href="#menu3">Social Media</a></li>-->
            </ul>
            <div>
              <div class="row g-4 tab-content">
                <div class="col-lg-4">
                  <div class="profile_card second_card">
                    <div class="card_content">
                      <div class="card_header">
                        <div class="author_photo">
                          <span class="pic"><img :src="user.avatar" alt=""></span>
<!--                          <span class="verified"><img src="/assets/images/check-varified.png" alt=""></span>-->
                        </div>
                      </div>
                      <div class="card_body">
                        <h5 class="card_title">{{ user.first_name }} {{ user.last_name }}</h5>
                        <div class="card_price mb-4">
                          <span class="mail">@{{ user.nick_name }}</span>
                        </div>
                      </div>
                      <div class="social_menu">
                        <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
                        <a href="https://twitter.com/?lang=en" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/bdmrk/" target="_blank"><i
                          class="fab fa-linkedin-in"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu1" class="col-lg-8 tab-pane fade in active">
                  <div class="single_card upload_form">
                    <div class="mb-4 pb-2">
                      <label for="firstName" class="label">First Name</label>
                      <input
                        v-model="newUserData.first_name"
                        type="text"
                        id="firstName"
                        class="box_control"
                        :placeholder="user.first_name">
                    </div>
                    <div class="mb-4 pb-2">
                      <label for="lastName" class="label">Last Name</label>
                      <input
                        v-model="newUserData.last_name"
                        type="text"
                        id="lastName"
                        class="box_control"
                        :placeholder="user.last_name">
                    </div>
                    <div class="mb-4 pb-2">
                      <label for="nickName" class="label">Nick Name</label>
                      <input
                        v-model="newUserData.nick_name"
                        type="text"
                        id="nickName"
                        class="box_control"
                        :placeholder="user.nick_name">
                    </div>
                    <div class="mb-4 pb-2">
                      <label for="emailaddress" class="label">Email Address</label>
                      <input
                        v-model="newUserData.email"
                        type="email"
                        id="emailaddress"
                        class="box_control"
                        :placeholder="user.email">
                    </div>
                    <button class="primary_button sq_button" type="submit" @click="apiUserUpdate">Update
                      Profile
                    </button>
                  </div>
                </div>
                <div id="menu2" class="col-lg-8 tab-pane fade">

                  <div class="single_card upload_form">
                    <div>
                      <div
                        class="author_photo_mini m-1"
                        v-for="(item, index) in listAvatar"
                        :key="index"
                        :class="{selected:avatar === item.path || avatar === item.url}"
                        @click="avatar = item.path"
                      >
                        <img :src="item.url" alt="">
                      </div>
                    </div>
                    <button class="primary_button sq_button w-60 mt-3" @click="apiUserAvatarUpdate">Update</button>
                  </div>
                </div>
                <div id="menu3" class="col-lg-8 tab-pane fade">
                  <div class="single_card upload_form">
                    <div class="social_cards mb-4 pb-2">
                      <i class="fab fa-instagram"></i>
                      <input type="text" id="instagram" class="box_control" placeholder="instagram">
                      <button class="primary_button sq_button" type="submit">Save</button>
                    </div>
                    <div class="social_cards mb-4 pb-2">
                      <i class="fab fa-facebook"></i>
                      <input type="text" id="facebook" class="box_control" placeholder="facebook">
                      <button class="primary_button sq_button" type="submit">Save</button>
                    </div>
                    <div class="social_cards mb-4 pb-2">
                      <i class="fab fa-youtube"></i>
                      <input type="text" id="youtube" class="box_control" placeholder="youtube">
                      <button class="primary_button sq_button" type="submit">Save</button>
                    </div>
                    <div class="social_cards mb-4 pb-2">
                      <i class="fab fa-twitter"></i>
                      <input type="text" id="twitter" class="box_control" placeholder="twitter">
                      <button class="primary_button sq_button" type="submit">Save</button>
                    </div>
                    <div class="social_cards mb-4 pb-2">
                      <i class="fab fa-linkedin-in"></i>
                      <input type="text" id="linkedin" class="box_control" placeholder="linkedin">
                      <button class="primary_button sq_button" type="submit">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

</template>

<script>
import {mapGetters, mapActions} from "vuex";
import Header from "@/components/global/Header";

export default {
  name: 'Setting',
  data: () => ({
    newUserData: {
      nick_name: '',
      email: '',
      first_name: '',
      last_name: '',
    },
    avatar: '',
  }),
  components: {
    Header,
  },
  mounted() {
    this.refreshNewUserData();
    if (!this.listAvatar.length) {
      this.actionIndexAvatar();
    }
  },
  computed: {
    ...mapGetters({
      authentication: "Auth/authentication",
      user: "Auth/user",
      listAvatar: "Setting/listAvatar"
    }),
  },
  methods: {
    ...mapActions({
      authUpdate: 'Auth/update',
      actionIndexAvatar: "Setting/action_index_avatar"
    }),
    apiUserUpdate() {
      let newUserData = {};
      for (const [key, value] of Object.entries(this.newUserData)) {
        if (value !== this.user[key]) {
          newUserData[key] = value;
        }
      }
      if (Object.keys(newUserData).length) {
        this.authUpdate(newUserData)
      }
    },
    apiUserAvatarUpdate() {
      if(this.user.avatar !== this.avatar){
        this.authUpdate({avatar: this.avatar})
          .then(() => {
            this.refreshNewUserData()
          })
      }
    },
    refreshNewUserData() {
      let {nick_name, email, first_name, last_name, avatar} = this.user;
      this.newUserData = {nick_name, email, first_name, last_name};
      this.avatar = avatar;
    }
  }
}
</script>

<style lang="scss" scoped>
.social_cards .box_control {
  width: 70%;
  margin-right: 10px;
  margin-left: 10px;
}

.social_cards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.social_cards i {
  font-size: 30px;
}

.author_photo_mini{
  display: inline-block;
  width: 50px;

  &:hover, &.selected {
    outline: solid rgb(var(--secondary-color)) 3px;
    border-radius: 50%;
  }
}

@media screen and (max-width: 992px) {
  .social_cards .box_control {
    min-height: 46px;
    padding: 4px 10px;
  }
}

@media screen and (max-width: 580px) {

  .author_content .author_photo_flex {
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .author_photo_flex .pic {
    margin-bottom: 30px;
  }
}
</style>

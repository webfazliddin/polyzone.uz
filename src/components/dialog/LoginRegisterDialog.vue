<template>
  <Dialog :show="loginRegister && !authentication">
    <LoginLocal v-if="isLogin">
      <template v-slot:close>
        <div class="col-sm-12 text-md-end mb-4" style="font-size: 20px">
          <button @click="closeDialog" type="button" class="close" data-dismiss="modal">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </template>
    </LoginLocal>
    <RegisterLocal v-if="!isLogin"/>
    <a class="text_button mt-4" @click="isLogin=!isLogin">
      <slot v-if="isLogin">Don’t Have an account? Sign up</slot>
      <slot v-else>Already have an account? Login</slot>
    </a>
  </Dialog>
</template>

<script>
import Dialog from "@/components/detal/Dialog";
import {mapActions, mapGetters} from "vuex";
import LoginLocal from "@/modules/auth/components/LoginLocal";
import RegisterLocal from "@/modules/auth/components/RegisterLocal";

export default {
  name: "LoginRegisterDialog",
  components: {
    RegisterLocal,
    Dialog,
    LoginLocal,
  },
  data() {
    return {
      isLogin: true
    }
  },
  computed: {
    ...mapGetters({
      loginRegister: "Dialog/loginRegister",
      authentication: "Auth/authentication"
    })
  },
  methods: {
    ...mapActions({
      closeDialog: "Dialog/action_login_register_hide"
    })
  },


}
</script>

import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import {required, email,} from 'vee-validate/dist/rules'

extend("email", email);
extend("required", required);



Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

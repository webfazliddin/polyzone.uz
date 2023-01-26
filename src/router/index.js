import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/router/User';
import Mod from "@/router/Mod";
import Home from "@/router/Home";
import checkAuth from "@/middlewares/checkAuth";


Vue.use(VueRouter)

const routes = [
  User,
  Mod,
  Home,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === '/'){
    router.push('/home')
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!checkAuth()) {
      next({ path: '/auth/login' })
      // next()
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router

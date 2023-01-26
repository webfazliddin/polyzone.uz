export default {
  path: '/',
  redirect: '/home',
  name: 'DefaultLayout',
  component: () => {
    return import('@/layouts/DefaultLayout')
  },
  // meta: {
  //   requiresAuth: true,
  // },
  children: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: 'home',
      name: 'home',
      component: () => {
        return import('@/pages/home')
      },
    },
    {
      path: 'authors',
      name: 'authors',
      component: () => {
        return import ('@/pages/authors')
      },
    },
    {
      path: 'about',
      name: 'about',
      component: () => {
        return import ('@/pages/about')
      },
    },
    {
      path: 'shopping_cart',
      name: 'shopping_cart',
      component: () => {
        return import ('@/pages/shopping-cart')
      },
    },
    {
      path: 'privacy-policy',
      name: 'privacy-policy',
      component: () => {
        return import ('@/pages/privacy-policy')
      },
    },
    {
      path: 'upload-old',
      name: 'upload-old',
      component: () => {
        return import ('@/pages/upload-old')
      },
    },
    {
      path: 'setting',
      name: 'setting',
      component: () => {
        return import ('@/pages/setting')
      },
    },
    {
      path: '404',
      name: '404',
      component: () => {
        return import('@/pages/error/404')
      },
    },
  ]
}

export default {
  path: '/auth',
  name: 'AuthLayout',
  component: () => {
      return import('@/layouts/AuthLayout')
  },
  // redirect: '/auth/login',
  children: [
    {
      path: 'login',
      name: 'Login',
      component: () => {
        return import('./pages/login')
      },
    },
    {
      path: 'register',
      name: 'Register',
      component: () => {
        return import('./pages/register')
      },
    },
    {
      path: 'setting',
      name: 'Setting',
      meta: {
        requiresAuth: true
      },
      component: () => {
        return import('./pages/setting')
      },
    }
  ]
}

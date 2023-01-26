export default {
  path: '/',
  redirect: '/home',
  name: 'DefaultLayout',
  component: () => {
    return import('@/layouts/DefaultLayout')
  },
  children: [
    {
      path: '/contact',
      name: 'contact',
      component: () => {
        return import ('./pages/ContactPage')
      },
    }
  ]
}

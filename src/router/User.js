export default {
  path: '/user',
  name: 'User',
  component: () => { return import('@/layouts/DefaultLayout')},
  redirect: '/404',
  children: [
    {
      path: ':id',
      name: 'Id',
      component: () => {
        return import('@/pages/user/id')
      },
    },
  ]
}

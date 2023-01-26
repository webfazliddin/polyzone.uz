export default {
  path: '/mod',
  name: 'Mod',
  component: () => { return import('@/layouts/DefaultLayout')},

  children: [
    {
      path: '/',
      name: 'ModPage',
      component: () => {
        return import('@/pages/mod')
      },
    },
    {
      path: ':id',
      name: 'Id',
      component: () => {
        return import('@/pages/mod/id')
      },
    },
  ]
}

export default {
  path: '/upload',
  name: 'DefaultLayout',
  component: () => {
      return import('@/layouts/DefaultLayout')
  },
  meta: {
    // requiresAuth: true
  },
  children: [
    {
      path: '',
      name: 'UploadDragDrop',
      component: () => {
        return import('./pages/UploadDragDrop')
      },
    },
    {
      path: 'properties',
      name: 'UploadProperties',
      component: () => {
        return import('./pages/UploadProperties')
      },
    },
    {
      path: 'edit',
      name: 'UploadEdit',
      component: () => {
        return import('./pages/UploadEdit')
      },
    }
  ]
}

import {registerModules} from '@/services/register-modules';

import Auth from './auth';
import Upload from './upload';

registerModules({
  Auth,
  Upload,
  404: {
    router: {
      path: '*',
      name: 'not_page',
      redirect: '/404'
    }
  }
})



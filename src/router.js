import Vue from 'vue';
import Router from 'vue-router';

import Landing from '@/components/Landing';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import FourOhFour from '@/components/FourOhFour';

Vue.use(Router);

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Landing,
    },
    {
      path: '/projects',
      component: Projects,
    },
    {
      path: '/experience',
      component: Experience,
    },
    {
      path: '*',
      component: FourOhFour,
    },
  ],
});

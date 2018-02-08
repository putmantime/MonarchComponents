import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/components/LandingPage';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/gene/:domainID/phenotypes',
      name: 'LandingPage',
      component: LandingPage,
    },
  ],
});

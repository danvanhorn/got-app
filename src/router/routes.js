import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Characters from '@/components/Characters';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Characters',
      name: 'Characters',
      component: Home,
    }
  ],
});

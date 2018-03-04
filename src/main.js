// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Router from 'vue-router';
import App from './App';
import Home from './components/Home';
import Characters from './components/Characters';
import Alliances from './components/Alliances';
import Specialties from './components/Specialties';
import Houses from './components/Houses';



Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(VueAxios, axios);


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Characters',
      name: 'Characters',
      component: Characters
    },
    {
      path: '/Alliances',
      name: 'Alliances',
      component: Alliances
    },
    {
      path: '/Houses',
      name: 'Houses',
      component: Houses
    },
    {
      path: '/Specialties',
      name: 'Specialties',
      component: Specialties
    },
    {path: '*'}
  ],
});

/* eslint-disable no-new */
new Vue(Vue.util.extend({ router }, App)).$mount('#app');

import Vue from 'vue';
import Router from 'vue-router';

import index from '../pages/index.vue';
import code from '../pages/code.vue';
import note from '../pages/note.vue';
import about from '../pages/about.vue';
import detail from '../pages/detail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'currentTab',
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'index',
      component: index
    },
    {
      path: '/Code',
      name: 'code',
      component: code
    },
    {
      path: '/Note',
      name: 'note',
      component: note
    },
    {
      path: '/About',
      name: 'about',
      component: about
    },
    {
      path: '/Detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})

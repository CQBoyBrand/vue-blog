import Vue from 'vue';
import Router from 'vue-router';

import index from '../pages/index.vue';
import code from '../pages/code.vue';
import note from '../pages/note.vue';
import about from '../pages/about.vue';
import detail from '../pages/detail.vue';
import tag from '../pages/tag.vue';
import archive from '../pages/archive.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'currentTab',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },//路由跳转滚动到顶部
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
    },
    {
      path: '/tag/:id',
      name: 'tag',
      component: tag
    },
    {
      path: '/archive/:id',
      name: 'archive',
      component: archive
    }
  ]
})

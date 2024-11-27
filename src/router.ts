import { createWebHistory, createRouter } from 'vue-router';

// views
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // home
    { name: 'home', path: '/', component: Home },
    // handles /:primary/:secondary?
    {
      name: 'home-static',
      path: '/:primary([a-fA-F0-9]{6})/:secondary([a-fA-F0-9]{6})?',
      component: Home,
    },
    // 404
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
});

export default router;

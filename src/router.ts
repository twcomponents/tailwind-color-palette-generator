import { createWebHistory, createRouter } from 'vue-router';

// views
import HomeView from './views/HomeView.vue';
import NotFoundView from './views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // home
    { name: 'home', path: '/', component: HomeView },
    // handles /:primary/:secondary?
    {
      name: 'home-static',
      path: '/:primary([a-fA-F0-9]{6})/:secondary([a-fA-F0-9]{6})?',
      component: HomeView,
    },
    // 404
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
  ],
});

export default router;

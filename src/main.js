import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import { createPinia } from 'pinia';

import Home from '@/pages/home.vue';
import App from './App.vue';

const app = createApp(App);

/**
 * Router
 */
const router = createRouter({
  history : createWebHistory(),
  routes  : [
    {
      path      : '/',
      component : Home
    }
  ]
});

/**
 * Pinia
 */
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');

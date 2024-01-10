// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from '../Pages/Main.vue';
import Shop from '../Pages/Shop.vue';
import About from '../Pages/About.vue';
const routes: RouteRecordRaw[] = [
  { path: '/', component: Main },
  { path: '/shop', component: Shop },
  { path: '/contact-us', component: About },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

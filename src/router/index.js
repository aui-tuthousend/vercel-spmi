import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sheet from "@/components/Sheet.vue";
import Import from "@/components/import/import.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/sheet/:jurusan/:periode',
      name: 'Sheet',
      component: Sheet
    },
    {
      path: '/import',
      name: 'Import',
      component: Import
    },
  ]
})

export default router

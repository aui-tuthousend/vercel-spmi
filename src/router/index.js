import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sheet from "@/components/Sheet.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sheet/:jurusan/:periode',
      name: 'Sheet',
      component: Sheet
    },
  ]
})

export default router

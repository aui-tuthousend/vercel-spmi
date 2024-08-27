import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sheet from "@/components/Sheet.vue";
import Import from "@/components/import/import.vue";
import PlayGround from "@/components/PlayGround.vue";
import Pengendalian from "@/components/pengendalian.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight'
      },
    },
    {
      path: '/sheet/:jurusan/:periode',
      name: 'Sheet',
      component: Sheet,
      meta: {
        enterClass: 'animate__animated animate__fadeInRight',
        leaveClass: 'animate__animated animate__fadeOutLeft'
      },
    },
    {
      path: '/import',
      name: 'Import',
      component: Import,
      meta: {
        enterClass: 'animate__animated animate__fadeInRight',
        leaveClass: 'animate__animated animate__fadeOutLeft'
      },
    },
    {
      path: '/playground',
      name: 'Playground',
      component: PlayGround
    },
    {
      path: '/pengendalian',
      name: 'pengendalian',
      component: Pengendalian
    },
  ]
})

export default router

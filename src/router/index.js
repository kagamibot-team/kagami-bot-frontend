import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/zhua',
      name: 'zhua',
      component: () => import('../views/ZhuaView.vue')
    }
  ]
})

export default router

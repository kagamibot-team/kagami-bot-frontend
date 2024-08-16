import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/zhua',
      name: 'zhua',
      component: () => import('../views/ZhuaView.vue')
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: () => import('../views/RecipeView.vue')
    }
  ]
})

export default router

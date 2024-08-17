import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/zhua',
      name: '抓小哥界面',
      component: () => import('../views/ZhuaView.vue')
    },
    {
      path: '/recipe',
      name: '合成界面',
      component: () => import('../views/RecipeView.vue')
    }
  ]
})

export default router

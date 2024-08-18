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
    },
    {
      path: '/liechang',
      name: '猎场界面',
      component: () => import('../views/LiechangView.vue')
    },
    {
      path: '/catch',
      name: '单独条目',
      component: () => import('../views/DisplayView.vue')
    },
    {
      path: '/help',
      name: '帮助',
      component: () => import('../views/HelpView.vue')
    }
  ]
})

export default router

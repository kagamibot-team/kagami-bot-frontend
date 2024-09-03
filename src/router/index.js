import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: () => import('../views/RouterHome.vue')
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
      path: '/storage',
      name: '库存界面',
      component: () => import('../views/StorageView.vue')
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
    },
    {
      path: '/help/detail',
      name: '帮助详情',
      component: () => import('../views/HelpDetailView.vue')
    },
    {
      path: '/about',
      name: '关于',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/update',
      name: '更新信息',
      component: () => import('../views/ZhuaUpdateView.vue')
    },
    {
      path: '/xjshop/bought',
      name: '小镜的shop - 购买成功',
      component: () => import('../views/xjshop/BuyView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404 页面',
      component: () => import('../views/default/NoViewPage.vue')
    },
    {
      path: '/tool',
      name: '工具合集',
      component: () => import('../views/ToolPage.vue')
    }
  ]
})

export default router

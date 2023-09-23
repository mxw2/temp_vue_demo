import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MyLogin from '@/components/MyLogin.vue'
import MyHome from '@/components/MyHome.vue'
import MyOrders from '@/components/menus/MyOrders.vue'
import MyRights from '@/components/menus/MyRights.vue'
import MySettings from '@/components/menus/MySettings.vue'
import MyUsers from '@/components/menus/MyUsers.vue'

const routes = [
    { path: '/login', component: MyLogin },
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: MyHome,
      children: [
        { path: 'goods', component: () => import('@/components/menus/MyGoods.vue') },
        { path: 'orders', component: MyOrders },
        { path: 'rights', component: MyRights },
        { path: 'settings', component: MySettings },
        { path: 'users', component: MyUsers }
      ]
    }
]

const router = new VueRouter({
  routes
})

export default router

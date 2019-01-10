import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Orders',
      name: 'Приходы',
        component: () => import(/* webpackChunkName: "Orders" */ './views/Orders.vue')
    },
    {
      path: '/Products',
      name: 'Продукты',
      component: () => import(/* webpackChunkName: "Products" */ './views/Products.vue')
    }
  ]
})

// src/router/index.ts — o urls.py do frontend: um URL por ecrã.
import { createRouter, createWebHistory } from 'vue-router'

import ProductsView from '@/views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: { name: 'products' } },
    { path: '/products', name: 'products', component: ProductsView },
    {
      // (\d+): só números, como <int:pk> no Django. /products/abc cai no catch-all.
      path: '/products/:id(\\d+)',
      name: 'product',
      props: true, // o :id chega ao componente como a prop `id` (string)
      component: () => import('@/views/ProductView.vue'), // lazy: um chunk só para o detalhe
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
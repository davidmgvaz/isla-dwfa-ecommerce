// src/router/index.ts — o urls.py do frontend. Vazio por agora: as rotas chegam no Passo 3.
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router

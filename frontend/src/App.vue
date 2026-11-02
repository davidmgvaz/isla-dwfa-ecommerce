<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="topbar">
    <RouterLink :to="{ name: 'products' }" class="brand">Loja DWFA</RouterLink>
    <nav>
      <RouterLink :to="{ name: 'products' }">Produtos</RouterLink>
    </nav>
  </header>

  <main class="content">
    <RouterView />
  </main>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #ddd;
}
.brand {
  font-weight: 700;
  text-decoration: none;
  color: inherit;
}
.content {
  max-width: 64rem;
  margin: 0 auto;
  padding: 1rem 1.5rem 3rem;
}
</style>
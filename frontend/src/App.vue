<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="topbar">
    <strong>Loja DWFA</strong>
  </header>

  <main class="content">
    <RouterView />
  </main>
</template>

<style scoped>
.topbar {
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #ddd;
}
.content {
  max-width: 64rem;
  margin: 0 auto;
  padding: 1rem 1.5rem 3rem;
}
</style>

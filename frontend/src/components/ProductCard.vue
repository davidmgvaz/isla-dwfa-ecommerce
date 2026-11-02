<!-- ProductCard.vue — um componente "burro": recebe um produto, emite um evento. -->
<script setup lang="ts">
import type { Product } from '@/types'

const props = defineProps<{ product: Product }>()
const emit = defineEmits<{
  select: [id: number]
}>()
</script>

<template>
  <article
    class="card"
    :class="{ out: props.product.stock === 0 }"
    role="button"
    tabindex="0"
    @click="emit('select', props.product.id)"
    @keydown.enter="emit('select', props.product.id)"
  >
    <!-- {{ }} escapa sempre: um nome "<b>Lamp</b>" aparece como texto -->
    <h3>{{ props.product.name }}</h3>
    <p class="meta">{{ props.product.sku }} · {{ props.product.category_name }}</p>
    <p class="price">{{ props.product.price }} €</p>
    <p class="stock">
      {{ props.product.stock === 0 ? 'Esgotado' : `${props.product.stock} em stock` }}
    </p>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  background: #fff;
}
.card:hover,
.card:focus {
  border-color: #42b883;
  outline: none;
}
.card.out {
  opacity: 0.55;
}
h3 {
  margin: 0 0 0.25rem;
  font-size: 1rem;
}
.meta {
  color: #6b6b6b;
  font-size: 0.85rem;
  margin: 0;
}
.price {
  font-weight: 600;
  margin: 0.5rem 0 0;
}
.stock {
  font-size: 0.85rem;
  margin: 0;
}
</style>
<script setup lang="ts">
import CartProductCard from "./CartProductCard.vue";

import { useProductStore } from "@/stores/ProductStore";

const productStore = useProductStore();
</script>

<template>
  <div class="container p-5">
    <h1>Cart</h1>
    <CartProductCard
      v-for="cartItem in productStore.cart"
      :cartItem="cartItem"
      :key="cartItem.id"
    />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped></style>

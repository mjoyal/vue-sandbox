<script setup lang="ts">
import CartProductCard from "./CartProductCard.vue";

import { useProductStore } from "@/stores/ProductStore";

const productStore = useProductStore();
</script>

<template>
  <div class="container p-5">
    <h1>Cart</h1>
    <CartProductCard
      v-for="product in productStore.cart"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :price="product.price"
      :likeCount="product.likeCount"
      :image="product.image"
      :isLiked="product.isLikedByCurrentUser"
    />
  </div>
  <h1>--------------------------------------------------</h1>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
</style>

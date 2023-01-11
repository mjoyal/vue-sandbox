<script setup lang="ts">
import ProductCard from "./ProductCard.vue";

import { useProductStore } from "@/stores/ProductStore";

const productStore = useProductStore();
</script>

<template>
  <div>
    <ProductCard
      v-for="product in productStore.products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :price="product.price"
      :likeCount="product.likeCount"
      :image="product.image"
      :isLiked="product.isLikedByCurrentUser"
    />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10px;
}
</style>

<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import { products } from "../data";
</script>

<template>
  <div>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :price="product.price"
      :likeCount="product.likeCount"
      :image="product.image"
    />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      products,
    };
  },
  methods: {},
  created() {
    console.log(this.products);
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>

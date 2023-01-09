<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import ProductCard from "./components/ProductCard.vue";
</script>

<template>
  <NavBar />
  <div class="main-product">
    <ProductCard title="Bunny Tee" price="$69.99" :likeCount="420" />
  </div>
</template>

<style>
body {
  background-color: lightblue;
  margin: 0;
  padding: 0;
}
</style>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
</script>

<template>
  <NavBar v-on:cartClick="onChildClick" />
  <Cart v-if="showCart" />
  <ProductList v-else />
</template>

<script lang="ts">
export default {
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    // Triggered when `cartClick` event is emitted by the child.
    onChildClick(value: boolean) {
      this.showCart = value;
    },
  },
};
</script>

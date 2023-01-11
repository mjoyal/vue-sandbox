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
    // Triggered when `childToParent` event is emitted by the child.
    onChildClick(value: boolean) {
      console.log("from child", value);
      this.showCart = value;
    },
  },
};
</script>

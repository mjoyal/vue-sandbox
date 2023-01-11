<script setup lang="ts">
import { useProductStore } from "@/stores/ProductStore";

const productStore = useProductStore();
</script>

<template>
  <header class="top-0 bg-teal-300 p-5 z-1">
    <nav class="flex justify-between">
      <h3>LUKANI</h3>
      <button @click="handleCartClick" class="flex justify-between">
        <i class="material-icons">shopping_cart</i>
        <p>{{ productStore.cartItemCount }}</p>
      </button>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    handleCartClick() {
      this.showCart = !this.showCart;
      this.$emit("cartClick", this.showCart);
    },
  },
};
</script>

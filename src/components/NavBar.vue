<script setup lang="ts">
import { useProductStore } from "@/stores/ProductStore";

const productStore = useProductStore();
</script>

<template>
  <header class="top-0 p-5 z-1 border-b border-black">
    <nav class="flex justify-between">
      <button @click="handleCartClick(false)">
        <h1 class="font-semibold inline">
          L <span class="u">U</span> <span class="k">K</span> A
          <span class="n">N</span> I
        </h1>
      </button>

      <button @click="handleCartClick(true)" class="flex justify-between">
        <i class="material-icons cart">shopping_cart</i>
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
    handleCartClick(value: boolean) {
      this.showCart = value;
      this.$emit("cartClick", this.showCart);
    },
  },
};
</script>

<style scoped>
h1,
p,
.cart {
  color: #1c0a62;
}
.k {
  color: #6141da;
}

.n {
  color: #f36747;
}

.u {
  color: #2bc48c;
}
</style>

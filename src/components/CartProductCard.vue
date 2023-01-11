<script setup lang="ts">
import  { useProductStore } from "@/stores/ProductStore";

const productStore = useProductStore();

defineProps<{
  cartItem: any;
}>();
</script>

<template>
  <div class="container flex border-t border-black py-3">
    <img :src="cartItem.image" width="100" />

    <div class="container pl-5">
      <div>
        <h5>{{ cartItem.title }}</h5>
        <p>${{ cartItem.price }}</p>
        <p>Quantity: {{ cartItem.count }}</p>
      </div>

      <p>
        <i class="material-icons favorite-icon">favorite</i>

        {{ cartItem.likeCount }}
      </p>

      <button @click="productStore.removeFromCart(cartItem.id)">Remove</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
};
</script>

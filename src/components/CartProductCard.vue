<script setup lang="ts">
import { useProductStore } from "@/stores/ProductStore";

const productStore = useProductStore();

defineProps<{
  id: number;
  title: string;
  price: number;
  likeCount: number;
  image: string;
  isLiked: boolean;
}>();
</script>

<template>
  <div class="container flex border-y border-black py-2">
    <img :src="image" width="100" />

    <div class="">
      <div>
        <h5>{{ title }}</h5>
        <p>${{ price }}</p>
      </div>

      <p>
        <i class="material-icons favorite-icon">favorite</i>

        {{ likeCount }}
      </p>

      <button @click="productStore.removeFromCart(id)">Remove</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      hover: false,
    };
  },
};
</script>

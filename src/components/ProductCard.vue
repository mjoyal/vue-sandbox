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
  <div class="container w-64">
    <div
      @click="productStore.addToCart(id)"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      class="bg-pink-500 container relative cursor-pointer"
    >
      <img :src="image" class="w-64 h-full" />
      <div
        v-if="hover"
        class="container absolute bottom-0 flex justify-center align-center p-3 bg-white/70"
      >
        <p>Add to Cart</p>
      </div>
    </div>

    <div class="container flex justify-between pt-2">
      <div>
        <p class="font-medium">{{ title }}</p>
        <p class="font-light">${{ price }}</p>
      </div>
      <button @click="productStore.toggleLike(id)" class="flex">
        <p class="font-light">
          <i
            v-if="isLiked"
            class="material-icons favorite-icon favourite-icon-isLiked"
            >favorite</i
          >
          <i v-else class="material-icons favorite-icon">favorite</i>

          {{ likeCount }}
        </p>
      </button>
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

<style scoped>
.favourite-icon-isLiked {
  color: #E355AA;
}
.favorite-icon {
  font-size: 15px;
}
</style>

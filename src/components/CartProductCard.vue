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
  <div class="container flex border-y border-black py-5">
    <img :src="image" width="250" />

    <div class="">
      <div>
        <h5>{{ title }}</h5>
        <p>${{ price }}</p>
      </div>
      <button @click="productStore.toggleLike(id)">
        <p>
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

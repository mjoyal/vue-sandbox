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
  <div class="wrapper">
    <img :src="image" width="250" />

    <div class="card-bottom">
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
};
</script>

<style scoped>
.favourite-icon-isLiked {
  color: red;
}
.favorite-icon {
  font-size: 15px;
}
.wrapper {
  width: 250px;
  background-color: beige;
}

.image {
  height: 350px;
  background-color: pink;
}
.card-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: aquamarine;
  width: 100%;
}

button {
    border: 0;
    background-color: transparent;
}
</style>

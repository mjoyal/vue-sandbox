<script setup lang="ts">
defineProps<{
  title: string;
  price: string;
  likeCount: number;
}>();
</script>

<template>
  <div class="wrapper">
    <div class="image"></div>

    <div class="card-bottom">
      <div>
        <h5>{{ title }}</h5>
        <p>{{ price }}</p>
      </div>
      <div>
        <p>❤️ {{ likeCount }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
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
}
</style>

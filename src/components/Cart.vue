<script setup lang="ts">
import CartProductCard from "./CartProductCard.vue";

import { useProductStore } from "@/stores/ProductStore";

const productStore = useProductStore();
</script>

<template>
  <div class="container py-5 px-10">
    <table class="table-fixed w-full text-left align-top">
      <thead>
        <tr>
          <th>
            <h1>Cart</h1>
          </th>
          <th>
            <h1>Item</h1>
          </th>
          <th>
            <h1>Price</h1>
          </th>
          <th>
            <h1>Quantity</h1>
          </th>
          <th>
            <h1>Total</h1>
          </th>
        </tr>
      </thead>

      <tbody>
        <CartProductCard
          v-for="cartItem in productStore.cart"
          :cartItem="cartItem"
          :key="cartItem.id"
        />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped></style>

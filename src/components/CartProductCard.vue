<script setup lang="ts">
import { useProductStore } from "@/stores/ProductStore";

const productStore = useProductStore();

defineProps<{
  cartItem: any;
}>();
</script>

<template>
  <tr class="border-t border-black">
    <td class="py-5">
      <img :src="cartItem.image" width="100" />
    </td>
    <td class=" align-top py-5">
      <h5 >{{ cartItem.title }}</h5>
    </td>
    <td class=" align-top py-5">
      <p>${{ cartItem.price }}</p>
    </td>
    <td class="align-top py-5">
      <p>{{ cartItem.count }}</p>
    </td>
    <td class="align-top py-5"><p>${{ cartItem.price * cartItem.count }}</p></td>
  </tr>
  <button @click="productStore.removeFromCart(cartItem.id)">Remove</button>
</template>

<script lang="ts">
export default {};
</script>

<!-- <div class="container flex border-t border-black py-3">
  <div class="flex justify-between bg-pink-100 w-full">
    <img :src="cartItem.image" width="100" />

    <h5 class="bg-pink-500">{{ cartItem.title }}</h5>
    <p class="bg-pink-500">${{ cartItem.price }}</p>
    <p class="bg-pink-500">{{ cartItem.count }}</p>
    <p class="bg-pink-500">$XX.XX</p>
  </div>


</div> -->

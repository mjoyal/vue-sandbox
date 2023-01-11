<script setup lang="ts">
defineProps<{
  label: string | number;
}>();
</script>

<template>
  <li>
    <a
      href="#"
      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >{{ label }}</a
    >
  </li>
</template>

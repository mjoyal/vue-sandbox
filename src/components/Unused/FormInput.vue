<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: string;
}>();
</script>

<template>
  <label>{{ label }}</label>
  <input v-model="inputValue" />
</template>

<script lang="ts">
export default {
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },

      set(value: string) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
